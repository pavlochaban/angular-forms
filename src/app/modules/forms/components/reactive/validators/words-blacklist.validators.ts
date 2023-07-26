import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function WordsBlacklist(_blackList: string | string[], controlToCheck?: AbstractControl<string>): ValidatorFn {
  const blackList = Array.isArray(_blackList) ? _blackList : [_blackList];

  return (control: AbstractControl<string>): ValidationErrors | null => {
    return !_isBanned(blackList, control, controlToCheck) ? null : _getError(blackList, controlToCheck);
  }
}

function _getError(blackList: string[], control?: AbstractControl<string>): ValidationErrors | null {
  if (control?.value) {
    return { wordsBlacklist: { bannedWords: control.value } };
  }
  return blackList?.length ? { wordsBlacklist: { bannedWords: blackList.join(', ') } } : null;
}

function _isBanned(blackList: string[], control: AbstractControl<string>, controlToCheck?: AbstractControl<string>): boolean {
  if (controlToCheck?.value) {
    return control.value?.toLowerCase() === controlToCheck.value?.toLowerCase();
  }
  return !!blackList.find((item: string) => control.value?.toLowerCase() === item?.toLowerCase());
}
