import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, FormRecord } from '@angular/forms';

@Pipe({
  name: 'nestedArrayControls',
  standalone: true,
})
export class NestedArrayControlsPipe implements PipeTransform {
  transform(value: FormControl | FormArray | FormGroup | FormRecord): AbstractControl<any, any>[] {
    if (!value
        || value instanceof FormControl
        || value instanceof FormGroup
        || value instanceof FormRecord
      ) { throw 'There is no nested controls'; }

    return value.controls;
  }
}
