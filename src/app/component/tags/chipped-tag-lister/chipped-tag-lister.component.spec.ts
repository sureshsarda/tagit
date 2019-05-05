/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChippedTagListerComponent } from './chipped-tag-lister.component';

xdescribe('ChippedTagListerComponent', () => {
  let component: ChippedTagListerComponent;
  let fixture: ComponentFixture<ChippedTagListerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChippedTagListerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChippedTagListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
