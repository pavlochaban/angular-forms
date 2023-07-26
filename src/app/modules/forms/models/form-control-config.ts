export type FormControlTypeCustom = 'custom_phones' | 'custom_skills';
export type FormControlType = 'input' | 'date' | 'group';
export type FormInputType = 'number' | 'email' | 'password' | 'text';

export interface FormControlConfig {
  [key: string]: {
    controlType: FormControlType | FormControlTypeCustom,
    order: number;
    type?: FormInputType,
    label?: string,
    placeholder?: string,
    htmlClass?: string,
    controls?: FormControlConfig,
    autocomplete?: string,
  }
}
