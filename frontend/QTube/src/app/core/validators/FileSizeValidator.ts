import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Validator to check the size of a file.
 * @param maxSize The maximum size of the file in bytes.
 * @returns A validator function that returns an error if the file size exceeds
 * the maximum size.
 */
export function FileSizeValidator(maxSize: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const file = control.value as File;
    if (file && file.size > maxSize) {
      return { fileSize: true };
    }
    return null;
  };
}
