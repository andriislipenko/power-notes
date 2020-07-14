import { ValidatorFn, AbstractControl } from '@angular/forms';

export function whiteSpaceValidator(): ValidatorFn {
    return (contorl: AbstractControl): { [key: string]: any } | null => {
        return contorl.value.trim() ? null : { whiteSpace: { value: true } };
    };
}
