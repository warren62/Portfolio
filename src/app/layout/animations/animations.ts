import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: '0' }),
    animate('1s ease-out', style({ opacity: '1' })),
  ]),
  transition(':leave', [
    style({ opacity: '1' }),
    animate('1s ease-out', style({ opacity: '0' })),
  ])
])

export const routeTransitionAnimations = trigger('routeTransition', [
  transition('Home => About, About => Contact, Home => Contact, Home => Skills, Home => Experience, Skills => Experience, Skills => Contact, Skills => Projects, Home => Projects, About => Skills, About => Experience, About => Projects, About => Contact, Experience => Projects, Experience => Contact, Projects => Contact', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({ right: '-100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('1s ease-out', style({ right: '100%', opacity: 0 }))]),
      query(':enter', [animate('1s ease-out', style({ right: '0%', opacity: 1 }))])
    ]),
    query(':enter', animateChild())
  ]),
  transition('Contact => About, About => Home, Contact => Home, Skills => Home,  Skills => About, Experience => Skills, Experience => About, Experience => Home, Projects => Experience, Projects => Skills, Projects => About, Projects => Home, Projects => Experience, Contact => Skills, Contact => Experience, Contact => Projects', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({ left: '-100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('1s ease-out', style({ left: '100%', opacity: 0 }))]),
      query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1 }))])
    ]),
    query(':enter', animateChild())
  ])
]);
