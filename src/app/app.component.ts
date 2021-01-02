import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(2000)),
    ]),

    trigger('EnterLeaveBtn2', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'rotate(90deg)', opacity: 0}),
        animate('0.3s ease-in')
      ])
    ]),

    trigger('EnterLeaveBtn1', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'rotate(-90deg)', opacity: 0}),
        animate('0.3s ease-in')
      ])
    ])
  ]
})
export class AppComponent {
  showRoundInscription = false;
  showCarousel = true;
  showLogin = false;
  showRegister = false;
  title = 'challenge';
  slides = [
    {
      title: "eeyaa",
      description: "Entrez dans l'ère du participatif",
    },
    {
      title: "eeyaa",
      description: "Entrez dans l'ère du participatif",
    },
  ];

  login() {
    
  }

  register() {

  }

  inscription_rounded_click() {
    this.showRoundInscription = !this.showRoundInscription
  }

  changeCarouselView(state = false) {
    this.showCarousel = state;
  }

  changeLoginView(step = 1) {
    this.showCarousel && step == 1 ? this.changeCarouselView() : 0;
    this.showRegister  && step == 1 ? this.changeRegisterView(2) : 0;
    this.showLogin  && step == 1 ? this.changeCarouselView(true) : 0;

    this.showLogin = !this.showLogin;
  }

  changeRegisterView(step = 1) {
    this.showCarousel && step == 1 ? this.changeCarouselView() : 0;
    this.showLogin && step == 1 ? this.changeLoginView(2) : 0;
    this.showRegister && step == 1 ? this.changeCarouselView(true) : 0;
    
    this.showRegister = !this.showRegister;
  }
}
