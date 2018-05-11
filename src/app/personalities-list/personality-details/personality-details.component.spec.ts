import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityDetailsComponent } from './personality-details.component';

describe('PersonalityDetailsComponent', () => {
  let component: PersonalityDetailsComponent;
  let fixture: ComponentFixture<PersonalityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
