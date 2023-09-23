import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomTextareaComponent } from './components/custom-textarea/custom-textarea.component';
import { LoginComponent } from './Screens/login/login.component';
import { LogoLoginComponent } from './components/logo-login/logo-login.component';
import { LandingScreen } from './Screens/landing/landing.component';
import { SignUpComponent } from './Screens/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    CustomButtonComponent,
    CustomTextareaComponent,
    LoginComponent,
    LogoLoginComponent,
    LandingScreen,
    SignUpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
