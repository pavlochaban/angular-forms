import { Pipe, PipeTransform } from '@angular/core';
import { DynamicControl } from '../../dynamic-control.model';

@Pipe({
  name: 'dynamicInputLabel',
  standalone: true,
})
export class DynamicInputLabelPipe implements PipeTransform {

  transform(config: DynamicControl, parentConfig: DynamicControl | undefined): string {
    if (!parentConfig || parentConfig.controlType !== 'array') { return config.label; }

    return config.label + ' #' + (config.order + 1)
  }

}
