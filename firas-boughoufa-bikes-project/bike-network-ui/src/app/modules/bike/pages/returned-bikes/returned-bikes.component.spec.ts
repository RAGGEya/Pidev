import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnedBikesComponent } from './returned-bikes.component';

describe('ReturnedBikesComponent', () => {
  let component: ReturnedBikesComponent;
  let fixture: ComponentFixture<ReturnedBikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnedBikesComponent]
    });
    fixture = TestBed.createComponent(ReturnedBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
