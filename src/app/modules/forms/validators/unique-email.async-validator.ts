import { ChangeDetectorRef, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { FormsDataService } from '@modules/forms/services/forms-data.service';
import { Observable, finalize, map, of } from 'rxjs';

@Injectable()
export class UniqueEmailValidationService implements AsyncValidator {

  private _error = { uniqueEmail: { isTaken: true } };

  constructor(
    private _formsDataService: FormsDataService,
    private _cdr: ChangeDetectorRef,
  ) { }

  validate(control: AbstractControl<string>): Observable<ValidationErrors | null> {
    if (!control.value) { return of(null); }

    return this._formsDataService.checkIsEmailUnique(control.value)
      .pipe(
        finalize(() => this._cdr.markForCheck()),
        map(isUnique => isUnique ? null : this._error)
      );
  }

}
