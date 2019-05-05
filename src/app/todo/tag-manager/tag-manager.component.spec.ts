/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TagManagerComponent } from './tag-manager.component';

xdescribe('TagManagerComponent', () => {
    let component: TagManagerComponent;
    let fixture: ComponentFixture<TagManagerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TagManagerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TagManagerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
