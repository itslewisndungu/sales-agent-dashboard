import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolInvoiceDetailsComponent } from './school-invoice-details.component';

describe('SchoolInvoiceDetailsComponent', () => {
  let component: SchoolInvoiceDetailsComponent;
  let fixture: ComponentFixture<SchoolInvoiceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolInvoiceDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolInvoiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
