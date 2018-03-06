import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrouteComponent } from './newroute.component';

describe('NewrouteComponent', () => {
  let component: NewrouteComponent;
  let fixture: ComponentFixture<NewrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
