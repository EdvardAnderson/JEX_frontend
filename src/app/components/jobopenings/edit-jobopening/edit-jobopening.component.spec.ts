import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobopeningComponent } from './edit-jobopening.component';

describe('EditJobopeningComponent', () => {
  let component: EditJobopeningComponent;
  let fixture: ComponentFixture<EditJobopeningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditJobopeningComponent]
    });
    fixture = TestBed.createComponent(EditJobopeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
