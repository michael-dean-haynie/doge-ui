import { CanActivate, Routes } from '@angular/router';

import { AuthGuardService} from './services/auth-guard.service';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';


export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent }

]