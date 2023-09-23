import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreen } from './Screens/landing/landing.component';
import { LoginComponent } from './Screens/login/login.component';
import { SignUpComponent } from './Screens/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: LandingScreen },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
