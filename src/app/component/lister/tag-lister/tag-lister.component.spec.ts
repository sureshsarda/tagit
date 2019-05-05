/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { AyeComponentsModule } from './../../aye.module';
import { TagListerComponent } from './tag-lister.component';


xdescribe('TagListerComponent', () => {
    let component: TagListerComponent;
    let fixture: ComponentFixture<TagListerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [MatIconModule, AyeComponentsModule]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TagListerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
