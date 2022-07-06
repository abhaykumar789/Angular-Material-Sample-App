import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonoverviewComponent } from './buttonoverview.component';

describe('ButtonoverviewComponent', () => {
  let component: ButtonoverviewComponent;
  let fixture: ComponentFixture<ButtonoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
