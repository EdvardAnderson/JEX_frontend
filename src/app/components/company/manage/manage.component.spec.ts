import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCompanyComponent } from './manage.component';

describe('ManageComponent', () => {
  let component: ManageCompanyComponent;
  let fixture: ComponentFixture<ManageCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageCompanyComponent]
    });
    fixture = TestBed.createComponent(ManageCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
