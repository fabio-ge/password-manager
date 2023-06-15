import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { MaNotification } from './model/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificaService {
  private notifyRequest = new ReplaySubject<MaNotification>();

  notifyRequest$ = this.notifyRequest.asObservable();

  constructor() {}

  notify(notification: MaNotification) {
    this.notifyRequest.next(notification);
  }
}
