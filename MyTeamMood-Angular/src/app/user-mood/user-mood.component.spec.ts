import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMoodComponent } from './user-mood.component';

describe('UserMoodComponent', () => {
  let component: UserMoodComponent;
  let fixture: ComponentFixture<UserMoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
