/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChippedTagComponent } from './chipped-tag.component';

xdescribe('ChippedTagComponent', () => {
  let component: ChippedTagComponent;
  let fixture: ComponentFixture<ChippedTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChippedTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChippedTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
