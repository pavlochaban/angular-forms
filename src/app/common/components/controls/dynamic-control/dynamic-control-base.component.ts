import { Directive, ElementRef, OnInit, Renderer2, StaticProvider, inject } from '@angular/core';
import { AbstractControl, ControlContainer, FormArray, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CONTROL_DATA } from './dynamic-control-data-token';
import { DynamicControl, ValidatorKeys } from './dynamic-control.model';

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

  private _getValidatorByKey(key: ValidatorKeys, validators: DynamicControl['validators'] = {}): ValidatorFn {
    const validatorParams = validators[key];
    if (key === 'required') {
      return Validators.required;
    }
    if (key === 'minLength' && typeof validatorParams === 'number') {
      return Validators.minLength(validatorParams);
    }

    return Validators.nullValidator;
  }

  private _addCustomClass(): void {
    if (this.controlData.config.htmlClass) {
      this.renderer.addClass(this.elRef.nativeElement, this.controlData.config.htmlClass);
    }
  }

}
