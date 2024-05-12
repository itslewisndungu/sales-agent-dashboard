import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolPrimaryInfoComponent } from './school-primary-info.component';

describe('SchoolPrimaryInfoComponent', () => {
  let component: SchoolPrimaryInfoComponent;
  let fixture: ComponentFixture<SchoolPrimaryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolPrimaryInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolPrimaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
