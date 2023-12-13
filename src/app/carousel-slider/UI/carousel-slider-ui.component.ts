import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription, interval, share } from 'rxjs';

@Component({
  selector: 'app-carousel-slider-ui',
  standalone: true,
  imports: [NgClass],
  templateUrl: './carousel-slider-ui.component.html',
  styleUrl: './carousel-slider-ui.component.scss'
})
export class CarouselSliderUiComponent implements OnInit{
  // @Input({required: true, alias: "data"}) data$!: Observable<string[]>
  @Input({required: true}) slides: string[] = []
  @Input() previousBtn: boolean = true
  @Input() nextBtn: boolean = true

  currentIndex: number = 0
  autoPlayTimer$ = interval(3000).pipe(share());
  autoPlayTimerSubs = new Subscription();

  ngOnInit(): void {
    this.startAutoPlayTimerFn();
  }

  startAutoPlayTimerFn(): void {
    this.autoPlayTimerSubs = this.autoPlayTimer$.pipe().subscribe(() => this.nextSlideFn());
  }

  restartAutoPlayTimerFn(): void {
    if(this.autoPlayTimerSubs) {
      this.autoPlayTimerSubs.unsubscribe();
    }
    this.startAutoPlayTimerFn();
  }

  previousSlideFn(): void {
    if(this.currentIndex === 0) {
      this.currentIndex = this.slides.length - 1;
      return
    }
    this.currentIndex--;
    
  }
  
  nextSlideFn(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length; 
    this.restartAutoPlayTimerFn();
    // if(this.currentIndex === this.data.length - 1) {
    //   this.currentIndex = 0;
    //   return
    // }
    // this.currentIndex++;
  }

  bottomBarFn(index: number): void {
    this.currentIndex = index
    this.restartAutoPlayTimerFn();
  }

}
