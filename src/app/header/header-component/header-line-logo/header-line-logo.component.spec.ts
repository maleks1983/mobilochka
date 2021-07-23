import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLineLogoComponent } from './header-line-logo.component';

describe('HeaderLineLogoComponent', () => {
  let component: HeaderLineLogoComponent;
  let fixture: ComponentFixture<HeaderLineLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLineLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLineLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
