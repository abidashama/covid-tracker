import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'bi-cart-dash', class: '' },
  { path: '/statistics', title: 'Statistics', icon: 'bi-dash-circle-fill', class: '' },
  { path: '/history', title: 'Maps', icon: 'bi-send-dash-fill', class: '' },
  { path: '/notifications', title: 'Notifications', icon: 'bi-speedometer', class: '' },
  { path: '/user', title: 'User Profile', icon: 'bi-apple', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  title: string = 'Covid-19 Tracker';
  public menuItems: any[] = [];

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
