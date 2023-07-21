import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaimagenesComponent } from './listaimagenes.component';

describe('ListaimagenesComponent', () => {
  let component: ListaimagenesComponent;
  let fixture: ComponentFixture<ListaimagenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaimagenesComponent]
    });
    fixture = TestBed.createComponent(ListaimagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
