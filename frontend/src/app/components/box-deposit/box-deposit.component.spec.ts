import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDepositComponent } from './box-deposit.component';

describe('BoxDepositComponent', () => {
  let component: BoxDepositComponent;
  let fixture: ComponentFixture<BoxDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
