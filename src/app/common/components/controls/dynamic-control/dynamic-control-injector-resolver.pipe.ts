import { Injector, Pipe, PipeTransform, inject } from '@angular/core';
import { CONTROL_DATA, IControlData } from './dynamic-control-data-token';
import { DynamicControl } from './dynamic-control.model';

@Pipe({
  name: 'dynamicControlInjectorResolver',
  standalone: true,
})
export class DynamicControlInjectorResolverPipe implements PipeTransform {

  private _injector = inject(Injector);

  public transform(controlKey: string, config: DynamicControl, parentConfig?: DynamicControl): Injector {
    return Injector.create({
      parent: this._injector,
      providers: [
        {
          provide: CONTROL_DATA,
          useValue: <IControlData>{ controlKey, config, parentConfig },
        }
      ]
    });
  }

}
