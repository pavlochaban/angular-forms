import { Validators } from "@angular/forms";

export type DynamicControlType = 'input' | 'group' | 'array';

export type ValidatorKeys = keyof Omit<typeof Validators, 'composeAsync' | 'compose' | 'prototype'>;

export interface DynamicControlSuffix {
  color: 'warn';
  iconName: string;
  clickMethod: 'deleteFromArray';
}

export interface DynamicControl<T = string> {
  controlType: DynamicControlType;
  type: string;
  label: string;
  placeholder: string;
  order: number;
  value: T | null;
  defaultChildControlConfig?: DynamicControl;
  controls?: DynamicFormConfig['controls'];
  validators?: {
    [key in ValidatorKeys]?: unknown;
  },
  suffix?: DynamicControlSuffix;
}

export interface DynamicFormConfig {
  controls: {
    [key: string | number]: DynamicControl;
  }
}
