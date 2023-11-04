import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ToastService } from '../../../core/services/toast.service';
import { Toast } from '../../../core/models/toast.model';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnInit {
  toasts$: Observable<Toast[]> = of([]);

  constructor(private _toastService: ToastService) {}

  ngOnInit() {
    this._toastService.toasts$.subscribe((toast) => {
      this.toasts$ = of(toast);
    });
  }

  close(toast: Toast) {
    this._toastService.remove(toast);
  }
}
