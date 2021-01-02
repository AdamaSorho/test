import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { fadeIn, fadeOut } from '../animations/carousel.animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(100%)', position: 'absolute'}),
        animate('0.5s ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('EnterLeaveTitle', [
      state('flyIn', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(100%)', position: 'absolute'}),
        animate('0.5s ease-in')
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {

  @Input() slides: any[] = [];
  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {

    setInterval((...args: any[]) => {
      this.onNextClick();
    }, 4000);
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}
