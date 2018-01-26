import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormControl, FormGroup } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact/contact-detail.component';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnimationComponent } from './animation/animation.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { environment } from '../environments/environment';
import { AuthService } from './shared/auth/auth.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const appRoutes: Routes = [
//  { path: '', component: HomeComponent },
 { path: '', redirectTo: '/home', pathMatch:'full'},
 { path: 'home', component: HomeComponent },
 { path: 'registration', component: RegistrationComponent },
 { path: 'login', component: LoginComponent },
 { path: 'contact', component: ContactComponent },
 { path: 'contact/:id', component: ContactDetailComponent },
 { path: 'animation', component: AnimationComponent },
 { path: 'register', component: SignUpComponent },
 { path: 'sign-in', component: SignInComponent },
 { path: 'forgot-password', component: ForgotPasswordComponent },
 { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    ContactComponent,
    HomeComponent,
    RegistrationComponent,
    ContactDetailComponent,
    PageNotFoundComponent,
    AnimationComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 