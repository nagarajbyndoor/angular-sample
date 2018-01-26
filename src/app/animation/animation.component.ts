import {  Component, 
          OnInit,
          trigger,
          state,
          style,
          transition,
          animate,
          keyframes,
          group
        } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('lightsOnOff', [
      state('off', style({
        backgroundColor: 'black'
      })),
      state('on', style({
        backgroundColor: 'white'
      })),
      transition('off => on', [animate('2s')]),
      transition('on => off', [animate('2s')])
    ])
  ]
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
