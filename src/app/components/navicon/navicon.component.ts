import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navicon',
  templateUrl: './navicon.component.html',
  styleUrls: ['./navicon.component.scss'],
})
export class NaviconComponent implements OnInit {
  faBars = faBars;
  @Input() text!: string;

  ngOnInit(): void {}
}
