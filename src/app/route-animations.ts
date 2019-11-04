import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
  } from '@angular/animations';


export const slider = trigger('routeAnimations', [
    // transition('* => isLeft', slideTo('left') ),
    // transition('* => isRight', slideTo('right') ),
    transition('isRight => *', slideTo('left') ),
    transition('isLeft => *', slideTo('right') )
  ]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({position: 'absolute', top: 0, [direction]: 0, width: '100%'}),
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('250ms ease', style({ [direction]: '100%'}))
      ], optional),
      query('.mat-card', style({ opacity: '0.5', position: 'absolute'})),
      // query('.mat-grid-list', style({ opacity: '0.5', position: 'absolute'})),
      query(':enter', [
        animate('250ms ease', style({ [direction]: '0%'}))
      ])
    ]),
    // Necessario para animacoes com elementos Child na pagina
    query(':leave', animateChild()),
    query(':enter', animateChild()),
  ];
}
