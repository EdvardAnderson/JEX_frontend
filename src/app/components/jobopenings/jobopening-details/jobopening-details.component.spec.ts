import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobopeningDetailsComponent } from './jobopening-details.component';

describe('JobopeningDetailsComponent', () => {
  let component: JobopeningDetailsComponent;
  let fixture: ComponentFixture<JobopeningDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobopeningDetailsComponent]
    });
    fixture = TestBed.createComponent(JobopeningDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
