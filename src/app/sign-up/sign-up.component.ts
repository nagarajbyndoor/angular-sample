import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  state: string = '';
  error: any;

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router ) { 
    this.form = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  register(formValue:any) {
    console.log(formValue.email);
    console.log(formValue.password);
    this.authService.register(formValue.email, formValue.password)
      .subscribe(
        success => this.router.navigate(['/sign-in']),
        error=>alert(error)
      );
  }

}
