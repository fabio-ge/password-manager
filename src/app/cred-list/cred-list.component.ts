import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';
import { Observable } from 'rxjs';
import { NotificaService } from '../services/notifica.service';
import { NotificationType } from '../model/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cred-list',
  templateUrl: './cred-list.component.html',
  styleUrls: ['./cred-list.component.css'],
})
export class CredListComponent implements OnInit {
  credList!: Observable<any>;
  constructor(private db: DbService, private notifica: NotificaService) {}

  ngOnInit(): void {
    this.credList = this.db.readAllCredentials();
  }

  deleteCred(id: string): void {
    this.db
      .deleteCredentials(id)
      .then(() => {
        this.notifica.notify({
          type: NotificationType.success,
          message: 'Credenziali cancellate con successo',
        });
      })
      .catch((error) => {
        this.notifica.notify({
          type: NotificationType.danger,
          message: 'Errore nella cancellazione ' + error,
        });
      });
  }
}
