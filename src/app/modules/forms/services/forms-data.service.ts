import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable()
export class FormsDataService {

  private readonly _urlEmailCheck = 'https://jsonplaceholder.typicode.com/users?email=';
  private readonly _invalidEmail = 'Sincere@april.biz';

  constructor(
    private _http: HttpClient,
  ) { }

  public checkIsEmailUnique(email: string): Observable<boolean> {
    return this._http.get<any[]>(this._urlEmailCheck + email)
      .pipe(
        map(users => !users?.length)
      );
  }

}
