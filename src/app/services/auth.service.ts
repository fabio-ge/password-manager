import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  authState,
} from '@angular/fire/auth';
import { User } from '../model/user';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  login(user: User) {
    return signInWithEmailAndPassword(this.auth, user.mail, user.password);
  }

  isLogged() {
    return authState(this.auth);
  }

  logout() {
    return signOut(this.auth);
  }
}
