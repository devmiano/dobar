import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbrand',
  templateUrl: './navbrand.component.html',
  styleUrls: ['./navbrand.component.scss'],
})
export class NavbrandComponent implements OnInit {
  @Input()
  text!: string;

  constructor() {}

  ngOnInit(): void {}
}
