import { Directive, ElementRef, OnInit, Renderer2, StaticProvider, inject } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ControlContainer, FormArray, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CONTROL_DATA } from './dynamic-control-data-token';
import { AsyncValidatorsKeys, DynamicControl, ValidatorKeys } from './dynamic-control.model';
import { UniqueEmailValidationService } from '@modules/forms/validators/unique-email.async-validator';
import { PasswordMatcher } from '@modules/forms/validators/password-matcher.validators';

export const dynamicControlProvider: StaticProvider = {
  provide: ControlContainer,
  useFactory: () => inject(ControlContainer, { skipSelf: true }),
}

@Directive()
export class DynamicControlBaseDirective implements OnInit {

  public elRef = inject(ElementRef);
  public renderer = inject(Renderer2);
  public controlData = inject(CONTROL_DATA);
  public controlContainer = inject(ControlContainer);
  public abstractControl!: AbstractControl;

  private _uniqueEmailValidationService = inject(UniqueEmailValidationService, { optional: true });

  public ngOnInit(): void {
    this._addCustomClass();
    if (this.controlContainer.control instanceof FormArray) {
      this.controlContainer.control.push(this.abstractControl);
    } else if (this.controlContainer.control instanceof FormGroup) {
      this.controlContainer.control.addControl(
        this.controlData.controlKey,
        this.abstractControl
      );
    }
  }

  protected resolveValidators({ validators = {} }: DynamicControl): ValidatorFn[] {
    const validatorKeys = (Object.keys(validators) as Array<keyof typeof validators>);
    const validatorFns = validatorKeys.map(key => this._getValidatorByKey(key, validators));

    return validatorFns;
  }

  protected resolveAsyncValidators({ asyncValidators = {} }: DynamicControl): AsyncValidatorFn[] {
    const asyncValidatorKeys = (Object.keys(asyncValidators) as Array<keyof typeof asyncValidators>);
    const asyncValidatorFns = <AsyncValidatorFn[]>asyncValidatorKeys.map(key => this._getAsyncValidatorByKey(key, asyncValidators)).filter(Boolean);

    return asyncValidatorFns;
  }

  private _getValidatorByKey(key: ValidatorKeys, validators: DynamicControl['validators'] = {}): ValidatorFn {
    const validatorParams = validators[key];
    if (key === 'required') {
      return Validators.required;
    }
    if (key === 'email') {
      return Validators.email;
    }
    if (key === 'minLength' && typeof validatorParams === 'number') {
      return Validators.minLength(validatorParams);
    }
    if (key === 'maxLength' && typeof validatorParams === 'number') {
      return Validators.maxLength(validatorParams);
    }
    if (key === 'pattern' && (typeof validatorParams === 'string' || validatorParams instanceof RegExp)) {
      return Validators.pattern(validatorParams);
    }
    if (key === 'passwordMatcher') {
      return PasswordMatcher;
    }

    return Validators.nullValidator;
  }

  private _getAsyncValidatorByKey(key: AsyncValidatorsKeys, validators: DynamicControl['asyncValidators'] = {}): AsyncValidatorFn | null {
    const validatorParams = validators[key];

    if (key === 'uniqueEmail' && !!this._uniqueEmailValidationService) {
      return this._uniqueEmailValidationService.validate.bind(this._uniqueEmailValidationService);
    }

    return null;
  }

  private _addCustomClass(): void {
    if (this.controlData.config.htmlClass) {
      this.renderer.addClass(this.elRef.nativeElement, this.controlData.config.htmlClass);
    }
  }

}
