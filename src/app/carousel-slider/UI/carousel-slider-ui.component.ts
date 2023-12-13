import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { interval, share } from 'rxjs';

@Component({
  selector: 'app-carousel-slider-ui',
  standalone: true,
  imports: [NgClass],
  templateUrl: './carousel-slider-ui.component.html',
  styleUrl: './carousel-slider-ui.component.scss'
})
export class CarouselSliderUiComponent implements OnInit{
  // @Input({required: true, alias: "data"}) data$!: Observable<string[]>
  @Input({required: true}) data: string[] = []
  @Input() previousBtn: boolean = true
  @Input() nextBtn: boolean = true

  currentIndex: number = 0
  autoPlayTimer = interval(3000).pipe(share());

  ngOnInit(): void {
    this.startIntervalFunction();
  }

  startIntervalFunction(): void {
    this.autoPlayTimer.pipe().subscribe(() => this.nextImageFn());
  }

  previousImageFn() {
    if(this.currentIndex === 0) {
      this.currentIndex = this.data.length - 1;
      return
    }
    this.currentIndex--;
    
  }
  
  nextImageFn() {
    this.currentIndex = (this.currentIndex + 1) % this.data.length; 
    
    // if(this.currentIndex === this.data.length - 1) {
    //   this.currentIndex = 0;
    //   return
    // }
    // this.currentIndex++;
  }


}
