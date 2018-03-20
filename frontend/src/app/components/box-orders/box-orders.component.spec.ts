import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxOrdersComponent } from './box-orders.component';

describe('BoxOrdersComponent', () => {
  let component: BoxOrdersComponent;
  let fixture: ComponentFixture<BoxOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
