import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselComponentComponent } from './carusel-component.component';

describe('CaruselComponentComponent', () => {
  let component: CaruselComponentComponent;
  let fixture: ComponentFixture<CaruselComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaruselComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaruselComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
