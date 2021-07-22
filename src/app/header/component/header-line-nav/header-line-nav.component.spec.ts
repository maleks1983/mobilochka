import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLineNavComponent } from './header-line-nav.component';

describe('HeaderLineNavComponent', () => {
  let component: HeaderLineNavComponent;
  let fixture: ComponentFixture<HeaderLineNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLineNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLineNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
