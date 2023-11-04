import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Toast } from '../models/toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _toasts = new BehaviorSubject<Toast[]>([]);

  get toasts$(): Observable<Toast[]> {
    return this._toasts.asObservable();
  }

  toast(text: string) {
    const toast = new Toast(text);
    this._toasts.next([...this._toasts.value, toast]);
    setTimeout(() => this.delete(toast), 4000);
  }

  delete(toast: Toast) {
    this._toasts.next(this._toasts.value.filter((t) => t !== toast));
  }
}
