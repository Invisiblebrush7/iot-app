import { Component, Input, OnInit } from '@angular/core';
import { navData } from './navData';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() collapsed: boolean = false;

  navData = navData;

  constructor() {}

  ngOnInit(): void {}
}
