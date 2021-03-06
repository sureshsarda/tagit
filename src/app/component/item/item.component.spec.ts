import { AyeComponentsModule } from './../aye.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { ItemComponent } from './item.component';
import { TagComponent } from '../tags/tag/tag.component';


xdescribe('ItemComponent', () => {
    let component: ItemComponent;
    let fixture: ComponentFixture<ItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ItemComponent, TagComponent, ReactiveFormsModule],
            imports: [MatIconModule, AyeComponentsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
