import { InjectionToken } from "@angular/core";
import { DynamicControl } from "./dynamic-control.model";

export interface IControlData {
  controlKey: string;
  config: DynamicControl;
  parentConfig?: DynamicControl;
}

export const CONTROL_DATA = new InjectionToken<IControlData>('CONTROL_DATA');
