import { Injectable, Type } from '@angular/core';
import { DynamicControl } from './dynamic-control.model';
import { Observable, from, of, tap } from 'rxjs';

type DynamicControlsMap = {
  [T in DynamicControl['controlType']]: () => Promise<Type<any>>;
}

@Injectable()
export class DynamicControlResolver {

  private _lazyComponents: DynamicControlsMap = {
    input: () => import('./dynamic-input/dynamic-input.component').then((c => c.DynamicInputComponent)),
    group: () => import('./dynamic-group/dynamic-group.component').then((c => c.DynamicGroupComponent)),
    array: () => import('./dynamic-array/dynamic-array.component').then((c => c.DynamicArrayComponent)),
  }
  private _loadedComponents = new Map<string, Type<any>>();

  public resolve(controlType: keyof DynamicControlsMap): Observable<Type<any>> {
    const loadedComponent = this._loadedComponents.get(controlType);
    if (loadedComponent) { return of(loadedComponent); }
    return from(this._lazyComponents[controlType]()).pipe(
      tap(component => this._loadedComponents.set(controlType, component)),
    );
  }
}
