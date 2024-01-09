import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isOpen = false;

  constructor() { }

  ngOnInit() {
    this.isOpen = window.localStorage.getItem('menuLateralOpen') === 'true';
  }
  toggle() {
    this.isOpen = !this.isOpen;
    window.localStorage.setItem('menuLateralOpen', this.isOpen.toString());
  }
}
