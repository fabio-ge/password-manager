import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  constructor(private auth: AuthService, private router: Router) {}

  OnLogout() {
    this.auth
      .logout()
      .then((resp) => {
        this.router.navigateByUrl('/');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  ngOnInit() {
    this.auth.isLogged().subscribe((user) => {
      this.isLogged = user != null;
      if (user == null) this.router.navigateByUrl('/');
    });
  }
}
