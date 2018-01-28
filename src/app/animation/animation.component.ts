import {  Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('lightOnOff', [
      state('off', style({
        backgroundColor: 'black'
      })),
      state('on', style({
        backgroundColor: 'white'
      })),
      transition('off => on', [animate('2000ms 3s ease-in', style({transform: 'rotate(90deg)'}))]),
      transition('on => off', [animate('2000ms ease-out', style({transform: 'rotate(-90deg)'}))])
    ])
  ]
})
export class AnimationComponent implements OnInit {
  title="Angular Animations";
  constructor() { }

  ngOnInit() {
  }
  roomState: string= "off";

  toggleLights() {
    this.roomState = (this.roomState == "off") ? "on" : "off";
  }

  animationStarted(event: any) {
    console.log("Start animation");
    console.log(event.fromState);
    console.log(event.toState);
    console.log(event.totalTime);
  }

  animationDone(event) {
    console.log(event.fromState);
    console.log(event.toState);
    console.log(event.totalTime);
    console.log("Animation Done");
  }
}

