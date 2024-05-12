import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingInvoicesComponent } from './upcoming-invoices.component';

describe('UpcomingInvoicesComponent', () => {
  let component: UpcomingInvoicesComponent;
  let fixture: ComponentFixture<UpcomingInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingInvoicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcomingInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
