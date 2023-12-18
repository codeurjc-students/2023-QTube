import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Validator to check the type of a file.
 * @param acceptedTypes The accepted types of the file.
 * @returns A validator function that returns an error if the file type is not
 * accepted.
 */
export function AcceptedFileTypeValidator(acceptedTypes: string[]) {
  return (control: AbstractControl): ValidationErrors | null => {
    const file = control.value as File;
    if (file && !acceptedTypes.includes(file.type)) {
      return { fileType: true };
    }
    return null;
  };
}

/**
 * Validator to check the size of a file.
 * @param maximumSize The maximum size of the file in bytes.
 * @returns A validator function that returns an error if the file size exceeds
 * the maximum size.
 */
export function FileSizeValidator(maximumSize: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const file = control.value as File;
    if (file && file.size > maximumSize) {
      return { fileSize: true };
    }
    return null;
  };
}
