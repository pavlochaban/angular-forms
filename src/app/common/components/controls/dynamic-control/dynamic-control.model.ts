import { Validators } from "@angular/forms";

export type DynamicControlType = 'input' | 'group' | 'array';

export type AsyncValidatorsKeys = 'uniqueEmail';
export type CustomValidatorKeys = 'passwordMatcher';
export type ValidatorKeys = keyof Omit<typeof Validators, 'composeAsync' | 'compose' | 'prototype'> | CustomValidatorKeys;

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
  htmlClass?: string;
  updateOn?: 'change' | 'blur' | 'submit'
  autocomplete?: string;
  defaultChildControlConfig?: DynamicControl;
  controls?: DynamicFormConfig['controls'];
  validators?: {
    [key in ValidatorKeys]?: unknown;
  },
  asyncValidators?: {
    [key in AsyncValidatorsKeys]?: unknown;
  },
  suffix?: DynamicControlSuffix;
}

export interface DynamicFormConfig {
  controls: {
    [key: string | number]: DynamicControl;
  }
}
