import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolInvoicesComponent } from './school-invoices.component';

describe('SchoolInvoicesComponent', () => {
  let component: SchoolInvoicesComponent;
  let fixture: ComponentFixture<SchoolInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolInvoicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
