import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AbstractControl, FormBuilder, FormControl, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { EMPTY, Observable, Subject, delay, of, takeUntil, tap } from 'rxjs';
import { WordsBlacklist } from './validators/words-blacklist.validators';
import { PasswordMatcher } from './validators/password-matcher.validators';
import { UniqueEmailService } from './async-validators/unique-email.async-validator';

@Component({
  templateUrl: 'reactive.component.html',
  styleUrls: ['reactive.component.less'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [
    UniqueEmailService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(FormGroupDirective) public formGroupDirective!: FormGroupDirective;

  public form = this._fb.group({
    firstName: ['', [Validators.required, Validators.minLength(6)]],
    lastName: ['', [Validators.minLength(6)]],
    nickname: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(25), Validators.pattern(/^[\w.]+$/)] ],
    email: [
      '',
      {
        validators: [Validators.required, Validators.email, Validators.minLength(4)],
        asyncValidators: [this._uniqueEmailService.validate.bind(this._uniqueEmailService)],
        updateOn: 'blur'
      }
    ],
    birthday: '',
    address: this._fb.group({
      fullAddress: '',
      city: '',
      postalCode: '',
    }),
    phones: this._fb.array(['']),
    skills: this._fb.group<{ [key: string]: FormControl<boolean> }>({}),
    credentials: this._fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.minLength(8)]],
    }, {
      validators: [PasswordMatcher]
    })
  });

  public skills$: Observable<string[]> = EMPTY;

  private _initialFormValues: unknown;
  private _onDestroy$ = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _uniqueEmailService: UniqueEmailService,
  ) { }

  public ngOnInit(): void {
    this._loadSkills();
    this._firstNameControlSubscribe();
    this._addValidators();
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
    this.formGroupDirective.resetForm(this._initialFormValues);
  }

  public onReset(event: Event): void {
    event.preventDefault();
    this.formGroupDirective.resetForm(this._initialFormValues);
  }

  public onAddPhone(event: MouseEvent): void {
    event.stopPropagation();
    const index = this.form.controls.phones.length;
    this.form.controls.phones.insert(index, new FormControl());
  }

  public onDeletePhone(event: MouseEvent, index: number): void {
    event.stopPropagation();
    this.form.controls.phones.removeAt(index);
  }

  private _firstNameControlSubscribe(): void {
    this.form.controls.firstName.valueChanges
      .pipe(
        tap(() => {
          this.form.controls.nickname.updateValueAndValidity();
        }),
        takeUntil(this._onDestroy$)
      ).subscribe();
  }

  private _addValidators(): void {
    this.form.controls.nickname.addValidators(WordsBlacklist([], this.form.controls.firstName as AbstractControl<string>));
  }

  private _loadSkills(): void {
    this.skills$ = this._getSkills()
      .pipe(
        tap((skills: string[]) => {
          this._buildSkillsForm(skills);
        }),
        takeUntil(this._onDestroy$)
      );
  }

  private _buildSkillsForm(skills: string[]): void {
    skills.forEach((skill: string) => {
      this.form.controls.skills.addControl(skill, new FormControl(false, { nonNullable: true }))
    });
  }

  // helpers
  private _getSkills(): Observable<string[]> {
    return of(['angular', 'rxjs', 'typescript', 'nodejs'])
      .pipe(
        delay(3000)
      );
  }

}
