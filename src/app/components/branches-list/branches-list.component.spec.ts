import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchesListComponent } from './branches-list.component';

describe('BranchesListComponent', () => {
  let component: BranchesListComponent;
  let fixture: ComponentFixture<BranchesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchesListComponent]
    });
    fixture = TestBed.createComponent(BranchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
