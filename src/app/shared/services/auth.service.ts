import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: User | null = null;

  constructor(
    public angularFirestores: AngularFirestore,
    public auth: AngularFireAuth
  ) {}

  logOut() {
    this.auth.signOut();
  }

  async login() {
    const { user } = await this.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
    this.addUserToCollection(user);
  }

  async addUserToCollection(user: any) {
    const userData: User = {
      email: user.email,
      displayName: user.displayName,
      records: [],
      typeOfUser: 'simple',
      uid: user.uid,
    };
    this.currentUser = userData;

    if ((await this.getUserFromCollection()) === null) {
      this.angularFirestores
        .collection('users')
        .add(userData)
        .then((res) => {})
        .catch((e) => {
          console.log(e);
        });
    }
  }

  async getUserFromCollection(): Promise<User | null> {
    const docsRef = this.angularFirestores
      .collection('users', (ref) =>
        ref.where('email', '==', this.currentUser?.email || '')
      )
      .get();
    docsRef.subscribe((ss) => {
      if (ss.docs.length === 0) {
        this.currentUser = null;
        return null;
      }
      const user = this.createUserFromObj(ss.docs[0].data());
      this.currentUser = user;
      return user;
    });
    return null;
  }

  createUserFromObj(user: any): User {
    const coolUser: User = {
      displayName: user.displayName,
      email: user.email,
      records: user.records,
      typeOfUser: user.typeOfUser,
      uid: user.uid,
    };
    return coolUser;
  }
}
