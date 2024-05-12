import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolCollectionsComponent } from './school-collections.component';

describe('SchoolCollectionsComponent', () => {
  let component: SchoolCollectionsComponent;
  let fixture: ComponentFixture<SchoolCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolCollectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
