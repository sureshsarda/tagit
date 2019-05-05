/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { AyeComponentsModule } from './../../aye.module';
import { HorizontalComponent } from './horizontal.component';


xdescribe('HorizontalComponent', () => {
    let component: HorizontalComponent;
    let fixture: ComponentFixture<HorizontalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [MatIconModule, AyeComponentsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HorizontalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
