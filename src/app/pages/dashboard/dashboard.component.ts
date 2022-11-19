import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {}

  users: any;

  constructor(firestore: Firestore) {
    const _collection = collection(firestore, 'users');
    this.users = collectionData(_collection);
  }
}
