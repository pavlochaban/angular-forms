import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { UniqueEmailValidationService } from '@modules/forms/validators/unique-email.async-validator';
import { Observable } from 'rxjs';

@Directive({
  selector: '[uniqueEmail]',
  standalone: true,
  providers: [
    UniqueEmailValidationService,
    { provide: NG_ASYNC_VALIDATORS, useExisting: UniqueEmailDirective, multi: true },
  ]
})
export class UniqueEmailDirective implements AsyncValidator {

  constructor(
    private _uniqueEmailValidationService: UniqueEmailValidationService,
  ) { }

  validate(control: AbstractControl<string>): Observable<ValidationErrors | null> {
    return this._uniqueEmailValidationService.validate(control);
  }

}
