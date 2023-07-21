import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilimagenesComponent } from './milimagenes.component';

describe('MilimagenesComponent', () => {
  let component: MilimagenesComponent;
  let fixture: ComponentFixture<MilimagenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilimagenesComponent]
    });
    fixture = TestBed.createComponent(MilimagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
