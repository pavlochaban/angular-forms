import { Component, AfterViewInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WordsBlacklistDirective } from './validators/words-blacklist.validators';
import { PasswordMatcherDirective } from './validators/password-matcher.validators';
import { UniqueEmailDirective } from './async-validators/unique-email.async-validator';

@Component({
  templateUrl: 'template-driven.component.html',
  styleUrls: ['template-driven.component.less'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    WordsBlacklistDirective,
    PasswordMatcherDirective,
    UniqueEmailDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateDrivenFormComponent implements AfterViewInit {

  @ViewChild(NgForm) form!: NgForm;

  private _initialFormValues: unknown;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this._initialFormValues = this.form.value;
    });
  }

  public onSubmit(event: SubmitEvent): void {
    if (this.form.invalid || this.form.pending) { return; }

    this._initialFormValues = this.form.value;
    this.form.resetForm(this._initialFormValues);
  }

  public onReset(event: Event): void {
    event.preventDefault();
    this.form.resetForm(this._initialFormValues);
  }

}
