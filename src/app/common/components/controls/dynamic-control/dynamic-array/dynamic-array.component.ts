import { Component, inject } from '@angular/core';
import { DynamicControlBaseDirective, dynamicControlProvider } from '../dynamic-control-base.component';
import { InputFormControlComponent } from '../../input-form-control/input-form-control.component';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, KeyValue, KeyValuePipe } from '@angular/common';
import { DynamicControlResolver } from '../dynamic-control.resolver';
import { DynamicControlInjectorResolverPipe } from '../dynamic-control-injector-resolver.pipe';
import { DynamicControl } from '../dynamic-control.model';
import { clone } from 'lodash';

@Component({
  templateUrl: './dynamic-array.component.html',
  styleUrls: ['./dynamic-array.component.less', '../../../../styles/forms/fieldset.less'],
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
    class: 'dynamic-form-array form__fieldset'
  }
})
export class DynamicArrayComponent extends DynamicControlBaseDirective {

  protected dynamicControlResolver = inject(DynamicControlResolver);
  public override abstractControl: FormArray<any> = new FormArray<any>([]);

  public trackBy(index: number, item: KeyValue<string, DynamicControl<string>>): string {
    return item.key;
  }

  public onAddClick(event: MouseEvent): void {
    const keys = Object.keys(this.controlData.config.controls || {});
    const defaultConfig = this.controlData.config.defaultChildControlConfig!;
    const maxOrder = Math.max(...Object.values(this.controlData.config.controls || {}).map(c => c.order), 0) + 1;
    const newControl = <DynamicControl>{
      controlType: defaultConfig.controlType,
      type: defaultConfig.type,
      label: defaultConfig.label,
      placeholder: defaultConfig.placeholder,
      value: '',
      order: maxOrder,
      suffix: defaultConfig.suffix,
    }

    const max = Math.max(...keys.map(k => Number(k)), 0) + 1;
    this.controlData.config.controls![max.toString()] = newControl;
    this.controlData.config.controls = clone(this.controlData.config.controls);
  }

  public comparatorFn = (a: KeyValue<string, DynamicControl<string>>, b: KeyValue<string, DynamicControl<string>>): number => {
    const aConfig = this.controlData.config.controls![a.key];
    const bConfig = this.controlData.config.controls![b.key];
    const aOrder = aConfig ? aConfig.order : -1;
    const bOrder = bConfig ? bConfig.order : -1;
    return aOrder - bOrder;
  }

}
