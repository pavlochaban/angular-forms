import { Component, inject } from '@angular/core';
import { DynamicControlBaseDirective, dynamicControlProvider } from '../dynamic-control-base.component';
import { InputFormControlComponent } from '../../input-form-control/input-form-control.component';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, KeyValue, KeyValuePipe } from '@angular/common';
import { DynamicControlResolver } from '../dynamic-control.resolver';
import { DynamicControlInjectorResolverPipe } from '../dynamic-control-injector-resolver.pipe';
import { DynamicControl } from '../dynamic-control.model';
import { clone } from 'lodash-es';

@Component({
  templateUrl: './dynamic-group.component.html',
  styleUrls: ['./dynamic-group.component.less', '../../../../styles/forms/fieldset.less'],
  standalone: true,
  viewProviders: [dynamicControlProvider],
  imports: [
    CommonModule,
    KeyValuePipe,
    InputFormControlComponent,
    MatIconModule,
    ReactiveFormsModule,
    DynamicControlInjectorResolverPipe,
  ],
  host: {
    class: 'dynamic-form-group form__fieldset form-fieldset'
  }
})
export class DynamicGroupComponent extends DynamicControlBaseDirective {

  protected dynamicControlResolver = inject(DynamicControlResolver);
  public override abstractControl: FormGroup<any> = new FormGroup({}, { validators: this.resolveValidators(this.controlData.config) });

  public trackBy(index: number, item: KeyValue<string, DynamicControl<string>>): string {
    return item.key;
  }

  public comparatorFn = (a: KeyValue<string, DynamicControl<string>>, b: KeyValue<string, DynamicControl<string>>): number => {
    const aConfig = this.controlData.config.controls![a.key];
    const bConfig = this.controlData.config.controls![b.key];
    const aOrder = aConfig ? aConfig.order : -1;
    const bOrder = bConfig ? bConfig.order : -1;
    return aOrder - bOrder;
  }

}
