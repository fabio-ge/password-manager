import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { NotificaService } from '../services/notifica.service';
import { NotificationType } from '../model/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private notifica: NotificaService,
    private router: Router
  ) {}

  OnSubmit(values: any) {
    let user: User = {
      mail: values.mail,
      password: values.password,
    };

    this.auth
      .login(user)
      .then(() => {
        console.log('Success');
      })
      .catch((err) => {
        this.notifica.notify({
          type: NotificationType.danger,
          message: 'Utente o password non riconosciuta',
        });
      });
  }

  ngOnInit(): void {
    this.auth.isLogged().subscribe((user) => {
      if (user != null) this.router.navigateByUrl('/home');
    });
  }
}
