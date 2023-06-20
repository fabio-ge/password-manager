import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Password } from '../model/password';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private fire: Firestore) {}

  addCredentials(form: object) {
    const dbInstance = collection(this.fire, 'pass');
    return addDoc(dbInstance, form);
  }

  readAllCredentials() {
    const dbInstance = collection(this.fire, 'pass');
    return collectionData(dbInstance, { idField: 'id' });
  }

  readPasswords(id: string) {
    const dbInstance = collection(this.fire, 'pass/' + id + '/passwords');
    return collectionData(dbInstance, { idField: 'id' });
  }

  savePassword(id: string, value: Password) {
    const dbInstance = collection(this.fire, 'pass/' + id + '/passwords');
    return addDoc(dbInstance, value);
  }

  deletePassword(fatherId: string, id: string) {
    const docInstance = doc(this.fire, 'pass/' + fatherId + '/passwords', id);
    return deleteDoc(docInstance);
  }

  deleteCredentials(id: string) {
    const docInstance = doc(this.fire, 'pass', id);
    return deleteDoc(docInstance);
  }
}
