import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupOverviewComponent } from './signup-overview.component';

describe('SignupOverviewComponent', () => {
  let component: SignupOverviewComponent;
  let fixture: ComponentFixture<SignupOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
