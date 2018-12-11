import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Authentication } from './authentication.interface';

@Injectable()
export class AuthenticationService {
  authKey = 'authKey';
  key = 'key';
  password = 'password';
  userKey = 'user';
  userName = 'username';

  constructor(private angularFirestore: AngularFirestore) {}

  login(userName: string, password: string): Observable<boolean> {
    const response = this.angularFirestore
      .collection(this.userKey, ref => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        query = query.where(this.userName, '==', userName);
        query = query.where(this.password, '==', password);
        return query;
      })
      .snapshotChanges()
      .pipe(
        map(todoSnap => {
          if (todoSnap[0]) {
            const authData: Authentication = todoSnap[0].payload.doc.data();
            localStorage.setItem(this.authKey, authData.key);
            return !!authData.key;
          } else {
            of(false);
          }
        }),
        first()
      );
    return response;
  }

  logout() {
    localStorage.removeItem(this.authKey);
  }

  isAuthenticated(): Observable<boolean> {
    const storageKey = localStorage.getItem(this.authKey);
    if (storageKey) {
      return this.angularFirestore
        .collection(this.userKey, ref => {
          let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          query = query.where(this.key, '==', storageKey);
          return query;
        })
        .snapshotChanges()
        .pipe(
          map(todoSnap => {
            if (todoSnap[0]) {
              const authData: Authentication = todoSnap[0].payload.doc.data();
              return !!authData.key;
            } else {

            }
          })
        );
    } else {
      of(false);
    }
  }
}
