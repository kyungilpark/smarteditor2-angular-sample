import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Smarteditor2Component } from './smarteditor2.component';

describe('Smarteditor2Component', () => {
  let component: Smarteditor2Component;
  let fixture: ComponentFixture<Smarteditor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Smarteditor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Smarteditor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
