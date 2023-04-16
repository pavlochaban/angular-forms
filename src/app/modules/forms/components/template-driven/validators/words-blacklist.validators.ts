import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[wordsBlacklist]',
  standalone: true,
  providers: [
    { provide: NG_VALIDATORS, useExisting: WordsBlacklistDirective, multi: true },
  ]
})
export class WordsBlacklistDirective implements Validator {

  @Input()
  set wordsBlacklist(value: string | string[]) {
    this._blackList = Array.isArray(value) ? value : [value];
    this._error = this._blackList?.length ? { wordsBlacklist: { bannedWords: this._blackList.join(', ') } } : null;
    this._validatorChange();
  };

  private _blackList: string[] = [];
  private _error: Object | null = null;
  private _validatorChange: () => void = () => {};

  validate(control: AbstractControl<string>): ValidationErrors | null {
    const isBanned = this._blackList.find((item: string) => control.value?.toLowerCase() === item?.toLowerCase());
    return !isBanned ? null : this._error;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this._validatorChange = fn;
  }
}
