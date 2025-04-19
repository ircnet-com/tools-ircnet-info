import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlineLookupComponent } from './iline-lookup.component';

describe('IlineLookupComponent', () => {
  let component: IlineLookupComponent;
  let fixture: ComponentFixture<IlineLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IlineLookupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IlineLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
