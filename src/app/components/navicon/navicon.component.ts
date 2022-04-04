import { Component, Input, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navicon',
  templateUrl: './navicon.component.html',
  styleUrls: ['./navicon.component.scss'],
})
export class NaviconComponent implements OnInit {
  @Input() text!: string;
  faBars = faBars;

  constructor() {}

  ngOnInit(): void {}
}
