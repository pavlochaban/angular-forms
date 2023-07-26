import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatFormFieldAppearance } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormInputType } from '@modules/forms/models/form-control-config';

type InputModelType = string | number | null;

@Component({
  selector: 'input-form-control',
  templateUrl: 'input-form-control.component.html',
  styleUrls: ['input-form-control.component.less'],
  standalone: true,
  imports: [
    NgIf,
    NgTemplateOutlet,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class InputFormControlComponent implements OnInit, ControlValueAccessor {

  @Input() public appearance: MatFormFieldAppearance = 'outline';
  @Input() public type: FormInputType = 'text';
  @Input() public autocomplete: string = 'on';
  @Input() public label: string | undefined;
  @Input() public placeholder: string | undefined = '';

  public disabled: boolean = false;
  public formControl!: FormControl<any>;

  private _onChange: (_: InputModelType) => void = () => {};
  private _onTouched: () => void = () => {};

  constructor(
    @Self() @Optional() private readonly _control: NgControl,
  ) {
    this._control.valueAccessor = this;
  }

  public ngOnInit(): void {
    this.formControl = this._control.control as FormControl;
  }

  public writeValue(value: InputModelType): void { }

  public registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}