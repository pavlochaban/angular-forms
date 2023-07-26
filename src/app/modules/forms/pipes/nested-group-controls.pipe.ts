import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, FormRecord } from '@angular/forms';

@Pipe({
  name: 'nestedGroupControls',
  standalone: true,
})
export class NestedGroupControlsPipe implements PipeTransform {
  transform(value: FormControl | FormArray | FormGroup | FormRecord): { [key: string]: AbstractControl<any, any>; } {
    if (!value
        || value instanceof FormControl
        || value instanceof FormArray
        || value instanceof FormRecord
      ) { throw 'There is no nested controls'; }

    return value.controls;
  }
}
