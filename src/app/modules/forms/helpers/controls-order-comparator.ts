import { KeyValue } from "@angular/common";
import { FormControlConfig } from "../models/form-control-config";
import { AbstractControl } from "@angular/forms";

export const comparatorFn = (formConfig: FormControlConfig) => {
  return (a: KeyValue<string, AbstractControl>, b: KeyValue<string, AbstractControl>): number => {
    const aConfig = formConfig[a.key];
    const bConfig = formConfig[b.key];
    const aOrder = aConfig ? aConfig.order : -1;
    const bOrder = bConfig ? bConfig.order : -1;
    return aOrder - bOrder;
  }
}
