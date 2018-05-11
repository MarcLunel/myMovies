import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityEditComponent } from './personality-edit.component';

describe('PersonalityEditComponent', () => {
  let component: PersonalityEditComponent;
  let fixture: ComponentFixture<PersonalityEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalityEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
