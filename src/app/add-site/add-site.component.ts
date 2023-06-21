import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../services/db.service';
import { NotificaService } from '../services/notifica.service';
import { NotificationType } from '../model/notification';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css'],
})
export class AddSiteComponent {
  constructor(
    private router: Router,
    private db: DbService,
    private notifica: NotificaService
  ) {}

  onSubmit(form: any) {
    console.log('FORM', form);
    if (form.name == '' || form.url == '' || form.imgUrl == '') {
      this.notifica.notify({
        type: NotificationType.danger,
        message: 'Tutti i campi sono obbligatori',
      });
      return;
    }
    this.db
      .addCredentials(form)
      .then(() => {
        this.notifica.notify({
          type: NotificationType.success,
          message: 'Credenziali aggiunte con successo',
        });
        this.goHome();
      })
      .catch((error) => console.log(error));
  }

  annulla(): void {
    this.goHome();
  }

  private goHome(): void {
    this.router.navigateByUrl('/home');
  }
}
