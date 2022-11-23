import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOutSuccesfullComponent } from './log-out-succesfull.component';

describe('LogOutSuccesfullComponent', () => {
  let component: LogOutSuccesfullComponent;
  let fixture: ComponentFixture<LogOutSuccesfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogOutSuccesfullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogOutSuccesfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
