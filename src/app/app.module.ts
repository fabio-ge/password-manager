import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddSiteComponent } from './add-site/add-site.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NotificationComponent } from './notification/notification.component';
import { CredListComponent } from './cred-list/cred-list.component';
import { PasswordComponent } from './password/password.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AddSiteComponent, NotificationComponent, CredListComponent, PasswordComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
