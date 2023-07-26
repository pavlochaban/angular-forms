import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, FormRecord } from '@angular/forms';

@Pipe({
  name: 'guardControlInstance',
  standalone: true,
})
export class GuardControlInstancePipe implements PipeTransform {
  transform(value: FormControl | FormArray | FormGroup | FormRecord): FormControl {
    if (!value
        || value instanceof FormGroup
        || value instanceof FormArray
        || value instanceof FormRecord
      ) { throw 'Value is not FormControl'; }

    return value;
  }
}
