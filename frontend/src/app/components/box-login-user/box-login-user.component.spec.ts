import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxLoginUserComponent } from './box-login-user.component';

describe('BoxLoginUserComponent', () => {
  let component: BoxLoginUserComponent;
  let fixture: ComponentFixture<BoxLoginUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxLoginUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxLoginUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
