import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxLoginFormComponent } from './box-login-form.component';

describe('BoxLoginFormComponent', () => {
  let component: BoxLoginFormComponent;
  let fixture: ComponentFixture<BoxLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
