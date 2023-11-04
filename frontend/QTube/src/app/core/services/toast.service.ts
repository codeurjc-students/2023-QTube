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

  show(text: string, delay: number = 2500) {
    const toast = new Toast(text);
    this._toasts.next([...this._toasts.value, toast]);
    setTimeout(() => this.remove(toast), delay);
  }

  remove(toast: Toast) {
    this._toasts.next(this._toasts.value.filter((t) => t !== toast));
  }
}
