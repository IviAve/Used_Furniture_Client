import { ValidatorFn } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
  

  // const domainStr = domains.join('|');
  // const regExp = new RegExp(`[A-Za-z0-9]{6,}@gmail\.(${domainStr})`);

  const regExp = new RegExp('^[A-Za-z0-9._%+-]{3,}@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

  return (control) => {
    const isInvalid = control.value === '' || regExp.test(control.value);
    return isInvalid ? null : { emailValidator: true };
  };
}
