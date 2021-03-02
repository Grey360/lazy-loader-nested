import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FirstSiblingComponent } from './first-sibling.component';

describe('FirstSiblingComponent', () => {
    let component: FirstSiblingComponent;
    let fixture: ComponentFixture<FirstSiblingComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FirstSiblingComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FirstSiblingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
