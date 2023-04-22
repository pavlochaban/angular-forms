import { Component, AfterViewInit, ChangeDetectionStrategy, ViewChild, OnInit, OnDestroy } from '@angular/core';
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
import { EMPTY, Observable, Subject, takeUntil } from 'rxjs';
import { FormsDataService } from '@modules/forms/services/forms-data.service';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
    MatCheckboxModule,
    WordsBlacklistDirective,
    PasswordMatcherDirective,
    UniqueEmailDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateDrivenFormComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(NgForm) form!: NgForm;

  public phones: string[] = ['1'];
  public skills$: Observable<string[]> = EMPTY;

  private _initialFormValues: unknown;
  private _onDestroy$ = new Subject<void>();

  constructor(
    private _formsDataService: FormsDataService,
  ) { }

  public ngOnInit(): void {
    this._loadSkills();
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this._initialFormValues = this.form.value;
    });
  }

  public ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
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

  public onAddPhone(event: MouseEvent): void {
    event.stopPropagation();
    const index = +(this.phones[this.phones.length - 1] || '0') + 1;
    this.phones.push(index.toString());
  }

  public onDeletePhone(event: MouseEvent, index: number): void {
    event.stopPropagation();
    this.phones.splice(index, 1);
  }

  private _loadSkills(): void {
    this.skills$ = this._formsDataService.getSkills()
      .pipe(
        takeUntil(this._onDestroy$)
      );
  }

}
