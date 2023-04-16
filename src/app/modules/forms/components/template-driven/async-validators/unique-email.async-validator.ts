import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, finalize, map } from 'rxjs';

@Directive({
  selector: '[uniqueEmail]',
  standalone: true,
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: UniqueEmailDirective, multi: true },
  ]
})
export class UniqueEmailDirective implements AsyncValidator {

  private readonly _url = 'https://jsonplaceholder.typicode.com/users?email=';
  private _error = { uniqueEmail: { isTaken: true } };

  constructor(
    private _http: HttpClient,
    private _cdr: ChangeDetectorRef,
  ) { }

  validate(control: AbstractControl<string>): Observable<ValidationErrors | null> {
    return this._http.get<any[]>(this._url + control.value)
      .pipe(
        finalize(() => this._cdr.markForCheck()),
        map(users => !users?.length ? null : this._error)
      );
  }

}
