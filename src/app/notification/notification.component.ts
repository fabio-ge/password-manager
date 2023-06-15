import { Component, ElementRef, ViewChild } from '@angular/core';
import { MaNotification, NotificationType } from '../model/notification';
import { NotificaService } from '../notifica.service';
import { tap, debounceTime } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  showNotification: boolean = false;

  //Notification object with the data that is going to be showed.
  incommingNotification: MaNotification = {
    title: '',
    message: '',
    type: NotificationType.danger,
  };

  constructor(private notificaService: NotificaService) {}

  ngOnInit(): void {
    //We subscribe or listens to new values / notification requests.
    this.notificaService.notifyRequest$
      .pipe(
        //we receive new notification and update the values of the notification object we have in this component.
        // we alse make the notification visible.
        tap((notification: MaNotification) => {
          this.incommingNotification = notification;
          this.showNotification = true;
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }),
        //we wait for 3 seconds before updating the visibility of the notification
        debounceTime(3000),
        //3 seconds later, we make our notification invisible again and ready for the value.
        tap(() => {
          this.showNotification = false;
        })
      )
      .subscribe();
  }
}
