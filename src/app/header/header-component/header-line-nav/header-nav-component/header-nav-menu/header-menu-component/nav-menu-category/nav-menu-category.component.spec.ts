import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuCategoryComponent } from './nav-menu-category.component';

describe('NavMenuCategoryComponent', () => {
  let component: NavMenuCategoryComponent;
  let fixture: ComponentFixture<NavMenuCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMenuCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
