import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navlink',
  templateUrl: './navlink.component.html',
  styleUrls: ['./navlink.component.scss'],
})
export class NavlinkComponent implements OnInit {
  @Input()
  text!: string;
  constructor() {}

  ngOnInit(): void {}
}
