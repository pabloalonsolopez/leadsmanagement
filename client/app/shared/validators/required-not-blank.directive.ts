import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core"
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from "@angular/forms"

export function requiredNotBlankValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const value = control.value
    const regExp: RegExp = /bob/i
    const match = regExp.test(value)
    return match ? {'requiredNotBlank': true} : null
  }
}

@Directive({
  selector: '[requiredNotBlank]',
  providers: [{provide: NG_VALIDATORS, useExisting: RequiredNotBlankValidatorDirective, multi: true}]
})

export class RequiredNotBlankValidatorDirective implements Validator, OnChanges {

  private valFn = Validators.nullValidator;

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['forbiddenName'];
    if (change) {
      const val: string | RegExp = change.currentValue;
      const re = val instanceof RegExp ? val : new RegExp(val, 'i');
      this.valFn = forbiddenNameValidator(re);
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }
}