import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityNewComponent } from './personality-new.component';

describe('PersonalityNewComponent', () => {
  let component: PersonalityNewComponent;
  let fixture: ComponentFixture<PersonalityNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalityNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
