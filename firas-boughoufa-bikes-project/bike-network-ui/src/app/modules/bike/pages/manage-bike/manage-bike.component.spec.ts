import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBikeComponent } from './manage-bike.component';

describe('ManageBikeComponent', () => {
  let component: ManageBikeComponent;
  let fixture: ComponentFixture<ManageBikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageBikeComponent]
    });
    fixture = TestBed.createComponent(ManageBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
