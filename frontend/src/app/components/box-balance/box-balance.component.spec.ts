import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxBalanceComponent } from './box-balance.component';

describe('BoxBalanceComponent', () => {
  let component: BoxBalanceComponent;
  let fixture: ComponentFixture<BoxBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
