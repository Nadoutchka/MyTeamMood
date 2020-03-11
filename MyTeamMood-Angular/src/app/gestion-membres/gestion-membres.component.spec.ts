import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMembresComponent } from './gestion-membres.component';

describe('GestionMembresComponent', () => {
  let component: GestionMembresComponent;
  let fixture: ComponentFixture<GestionMembresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionMembresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMembresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
