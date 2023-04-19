/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GenericAlrtComponent } from './generic-alrt.component';

describe('GenericAlrtComponent', () => {
  let component: GenericAlrtComponent;
  let fixture: ComponentFixture<GenericAlrtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericAlrtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericAlrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
