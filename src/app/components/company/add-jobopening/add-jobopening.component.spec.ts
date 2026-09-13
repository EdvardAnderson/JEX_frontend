import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobopeningComponent } from './add-jobopening.component';

describe('AddJobopeningComponent', () => {
  let component: AddJobopeningComponent;
  let fixture: ComponentFixture<AddJobopeningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddJobopeningComponent]
    });
    fixture = TestBed.createComponent(AddJobopeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
