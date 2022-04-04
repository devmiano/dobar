import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbrandComponent } from './navbrand.component';

describe('NavbrandComponent', () => {
  let component: NavbrandComponent;
  let fixture: ComponentFixture<NavbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
