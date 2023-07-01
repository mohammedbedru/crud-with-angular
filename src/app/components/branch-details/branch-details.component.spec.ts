import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchDetailsComponent } from './branch-details.component';

describe('BranchDetailsComponent', () => {
  let component: BranchDetailsComponent;
  let fixture: ComponentFixture<BranchDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchDetailsComponent]
    });
    fixture = TestBed.createComponent(BranchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
