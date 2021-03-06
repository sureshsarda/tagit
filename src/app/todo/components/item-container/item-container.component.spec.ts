/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { ItemContainerComponent } from './item-container.component';


xdescribe('ItemContainerComponent', () => {
    let component: ItemContainerComponent;
    let fixture: ComponentFixture<ItemContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ItemContainerComponent],
            imports: [MatIconModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
