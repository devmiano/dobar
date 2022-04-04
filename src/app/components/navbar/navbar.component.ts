import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  text: any = 'menu';
  showSideBar: boolean = false;

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;

    if (this.showSideBar) {
      this.text = 'close';
    } else {
      this.text = 'menu';
    }
  }

  ngOnInit(): void {}
}
