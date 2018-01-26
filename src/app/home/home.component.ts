import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HomeService } from './home.service';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  isValid = true;
  food = ['Chicken biriyani', 'Chicken Kabab', 'Gobi Manchurian', 'Paneer Palak'];
  public imgLink = "http://lorempixel.com/400/200/";
  title:string;
// Class and Style binding
  public applyclass = true;
  public applyblue = true;

// Two way data binding
  public fname = "Nagaraj";
  public lname = "Byndoor";

//Structural directives  - ngSwitch Case
  public color = 'red';

//Attribute directives
  public cone = true;
  public ctwo = true;

//ngStyle
  public style = 'italic';
  public size = '30px';

  isClicked = false;

//Event output binding value
  public childData : string;

//Pipes
  public pname = "Nagaraj";
  dateVal = new Date();
  public jsonVal = { moo: 'foo', goo: { too: 'new' }};

  public user$ = this.authService.user; 
  public isloggedIn: boolean;
  constructor(private myService : HomeService, private authService: AuthService) { 
    authService.isAuthenticated()
    .subscribe(
      success => this.isloggedIn = success
    );
  }

  ngOnInit() {
    this.title = this.myService.someMethod();
  }

  onCLick() {
    alert('Button is clicked');
  }

  onCLickGetValue(value) {
    alert(value);
  }

  toggle() {
    this.cone = !this.cone;
    this.ctwo = !this.ctwo;
  }
}
