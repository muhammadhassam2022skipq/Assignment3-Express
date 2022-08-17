import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninFromComponent } from './signin-from.component';

describe('SigninFromComponent', () => {
  let component: SigninFromComponent;
  let fixture: ComponentFixture<SigninFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
