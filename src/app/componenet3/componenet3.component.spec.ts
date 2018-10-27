import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenet3Component } from './componenet3.component';

describe('Componenet3Component', () => {
  let component: Componenet3Component;
  let fixture: ComponentFixture<Componenet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componenet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componenet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
