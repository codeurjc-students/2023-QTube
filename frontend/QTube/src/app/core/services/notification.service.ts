import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2';

/**
 * Service to display toast or modal style notifications using SweetAlert2.
 */
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  /**
   * Shows a error modal with a message.
   */
  public error() {
    Swal.fire({
      title: 'Error!',
      text: 'An error has occurred. Please try again later.',
      icon: 'error',
    });
  }

  /**
   * Shows a success modal with a message.
   */
  public success() {
    Swal.fire({
      title: 'Succes!',
      text: 'The operation was completed successfully.',
      icon: 'success',
    });
  }

  /**
   * Display a confirmation modal and execute the `onConfirm` function if
   * confirmed.
   * @param onConfirm Function to be executed if the operation is confirmed.
   */
  confirmOperationDialog(onConfirm: () => Observable<any>) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm().subscribe({
          next: () => {
            this.success();
          },
          error: () => {
            this.error();
          },
        });
      }
    });
  }
}
