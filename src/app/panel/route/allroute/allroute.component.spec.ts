import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrouteComponent } from './allroute.component';

describe('AllrouteComponent', () => {
  let component: AllrouteComponent;
  let fixture: ComponentFixture<AllrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
