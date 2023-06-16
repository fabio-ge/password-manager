import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';

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

  deleteCredentials(id: string) {
    const docInstance = doc(this.fire, 'pass', id);
    return deleteDoc(docInstance);
  }
}
