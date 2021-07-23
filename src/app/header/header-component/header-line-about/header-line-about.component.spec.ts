import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLineAboutComponent } from './header-line-about.component';

describe('HeaderLineAboutComponent', () => {
  let component: HeaderLineAboutComponent;
  let fixture: ComponentFixture<HeaderLineAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLineAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLineAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
