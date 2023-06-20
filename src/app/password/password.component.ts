import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '../model/params';
import { DbService } from '../services/db.service';
import { NotificaService } from '../services/notifica.service';
import { NotificationType } from '../model/notification';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AES, enc } from 'crypto-js';
import { Password } from '../model/password';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent implements OnInit {
  pars!: Params;
  pwds!: Array<Password>;
  decryptedPwds: number[] = [];
  secret: string = 'sa&%!89DASHvGUAct761r786/(&%$e5wvDUIBDL';

  constructor(
    private route: ActivatedRoute,
    private db: DbService,
    private notifica: NotificaService
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((data) => {
      let queryData: any = data;
      this.pars = {
        id: queryData.params.id,
        name: queryData.params.name,
        url: queryData.params.url,
        imgUrl: queryData.params.imgurl,
      };

      this.db.readPasswords(this.pars.id).subscribe((resp: any) => {
        this.pwds = resp;
        this.decryptedPwds = [];
      });
    });
  }

  OnSavePwd(form: NgForm) {
    form.value.password = this.encryptPassword(form.value.password);
    this.db
      .savePassword(this.pars.id, form.value)
      .then(() => {
        this.notifica.notify({
          type: NotificationType.success,
          message: 'Nuove credenziali aggiunte',
        });

        form.resetForm();
      })
      .catch((error) => {
        this.notifica.notify({
          type: NotificationType.danger,
          message: error,
        });
      });
  }

  OnDeletePwd(id: string) {
    this.db
      .deletePassword(this.pars.id, id)
      .then(() => {
        this.notifica.notify({
          type: NotificationType.success,
          message: 'Password cancellata',
        });
      })
      .catch((error) => {
        this.notifica.notify({
          type: NotificationType.danger,
          message: error,
        });
      });
  }

  OnDecrypt(password: string, i: number) {
    if (!this.decryptedPwds.includes(i)) {
      this.pwds[i].password = this.decryptPassword(password);
      this.decryptedPwds.push(i);
    }
  }

  encryptPassword(password: string): string {
    return AES.encrypt(password, this.secret).toString();
  }

  decryptPassword(password: string) {
    return AES.decrypt(password, this.secret).toString(enc.Utf8);
  }
}
