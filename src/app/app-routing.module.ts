import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSiteComponent } from './add-site/add-site.component';
import { CredListComponent } from './cred-list/cred-list.component';
import { PasswordComponent } from './password/password.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: CredListComponent },
  { path: 'addsite', component: AddSiteComponent },
  { path: 'editPass', component: PasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
