import { Component } from '@angular/core';
import { DynamicControlBaseDirective, dynamicControlProvider } from '../dynamic-control-base.component';
import { InputFormControlComponent } from '../../input-form-control/input-form-control.component';
import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { clone } from 'lodash-es';
import { DynamicInputSuffixPipe } from './pipes/dynamic-input-suffix.pipe';
import { DynamicInputLabelPipe } from './pipes/dynamic-input-label.pipe';
import { UniqueEmailValidationService } from '@modules/forms/validators/unique-email.async-validator';

@Component({
  templateUrl: 'dynamic-input.component.html',
  standalone: true,
  viewProviders: [dynamicControlProvider],
  imports: [
    InputFormControlComponent,
    ReactiveFormsModule,
    DynamicInputSuffixPipe,
    DynamicInputLabelPipe,
  ],
  providers: [UniqueEmailValidationService],
  host: {
    class: 'dynamic-form-input form__field'
  }
})
export class DynamicInputComponent extends DynamicControlBaseDirective {

  public override abstractControl: FormControl = new FormControl(
    this.controlData.config.value,
    {
      validators: this.resolveValidators(this.controlData.config),
      asyncValidators: this.resolveAsyncValidators(this.controlData.config),
      updateOn: this.controlData.config.updateOn,
    }
  );

  public onSuffixClick(): void {
    const method = this.controlData.config.suffix?.clickMethod;
    if (method) {
      this[method](this.controlData.controlKey);
    }
  }

  private deleteFromArray(key: string): void {
    const formArray = this.controlContainer.control as FormArray;
    const controlIndex = formArray.controls.findIndex(control => control === this.abstractControl);
    formArray.removeAt(controlIndex)
    const controls = clone(this.controlData.parentConfig?.controls);
    delete controls![key];
    this.controlData.parentConfig!.controls = controls;
  }

}
