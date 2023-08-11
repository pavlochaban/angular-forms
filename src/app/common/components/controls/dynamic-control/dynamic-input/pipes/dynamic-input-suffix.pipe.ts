import { Pipe, PipeTransform } from '@angular/core';
import { DynamicControl, DynamicControlSuffix } from '../../dynamic-control.model';

@Pipe({
  name: 'dynamicInputSuffix',
  standalone: true,
})
export class DynamicInputSuffixPipe implements PipeTransform {

  transform(controls: DynamicControl['controls'], config: DynamicControl): DynamicControlSuffix | undefined {
    if (!controls) { return; }

    const keys = Object.keys(controls);
    return keys.length > 1 ? config.suffix : undefined;
  }

}
