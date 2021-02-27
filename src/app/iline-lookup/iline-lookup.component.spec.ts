import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {IlineLookupComponent} from './iline-lookup.component';

describe('IlineLookupComponent', () => {
  let component: IlineLookupComponent;
  let fixture: ComponentFixture<IlineLookupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IlineLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlineLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
