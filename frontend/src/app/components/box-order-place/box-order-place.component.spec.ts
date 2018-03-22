import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxOrderPlaceComponent } from './box-order-place.component';

describe('BoxOrderPlaceComponent', () => {
  let component: BoxOrderPlaceComponent;
  let fixture: ComponentFixture<BoxOrderPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxOrderPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxOrderPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
