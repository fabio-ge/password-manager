import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private fire: Firestore) {}

  addCredentials(form: object) {
    const dbInstance = collection(this.fire, 'pass');
    return addDoc(dbInstance, form);
  }
}
