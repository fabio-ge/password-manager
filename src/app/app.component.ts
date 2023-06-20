import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'password-manager';
  showLink: boolean = true;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        let editRegEx = /^\/editPass*/g;
        if (e.url == '/addsite' || editRegEx.test(e.url)) this.showLink = false;
        else this.showLink = true;
      }
    });
  }
}
