import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowedBikeListComponent } from './borrowed-bike-list.component';

describe('BorrowedBikeListComponent', () => {
  let component: BorrowedBikeListComponent;
  let fixture: ComponentFixture<BorrowedBikeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowedBikeListComponent]
    });
    fixture = TestBed.createComponent(BorrowedBikeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
