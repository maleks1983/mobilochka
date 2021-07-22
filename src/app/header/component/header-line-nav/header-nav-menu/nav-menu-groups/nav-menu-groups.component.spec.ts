import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuGroupsComponent } from './nav-menu-groups.component';

describe('NavMenuGroupsComponent', () => {
  let component: NavMenuGroupsComponent;
  let fixture: ComponentFixture<NavMenuGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMenuGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
