import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSliderUiComponent } from './carousel-slider-ui.component';

describe('CarouselSliderUiComponent', () => {
  let component: CarouselSliderUiComponent;
  let fixture: ComponentFixture<CarouselSliderUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselSliderUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselSliderUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
