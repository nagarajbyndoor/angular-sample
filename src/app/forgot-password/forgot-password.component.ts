import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public form : FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router ) { 
    this.form = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])]
    });
  }
  ngOnInit() {
  }
  
  resetPass(email: string) {
    this.authService.resetPassword(email);
  }
}
