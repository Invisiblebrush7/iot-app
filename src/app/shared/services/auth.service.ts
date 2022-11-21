import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: User | null = {
    email: '',
    displayName: 'User',
    records: [],
    typeOfUser: 'simple',
    uid: '',
  };

  constructor(
    public angularFiresetore: AngularFirestore,
    public auth: AngularFireAuth
  ) {}

  logOut() {
    this.auth.signOut();
    this.currentUser = null;
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

    if (!(await this.userDocsExist(user.email))) {
      this.angularFiresetore
        .collection('users')
        .doc(user.email)
        .set(userData)
        .then((res) => {})
        .catch((e) => {
          console.log(e);
        });
    }
  }

  async userDocsExist(userEmail: string): Promise<boolean> {
    const temp = this.angularFiresetore.collection('users').doc(userEmail);
    temp.ref
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log('Document data:', doc.data());
          return true;
        } else {
          console.log('No such document!');
          return false;
        }
      })
      .catch(function (error) {
        console.log('Error getting document:', error);
        return false;
      });
    return false;
  }

  async getcurrentAuthUser() {
    return this.currentUser;
  }
  getUserData() {
    const user = JSON.parse(localStorage.getItem('user') || '{ }');
    if (user.email && user.displayName && user.photoURL) {
      return {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };
    }
    return {};
  }
}
