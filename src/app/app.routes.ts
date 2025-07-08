import { Routes } from '@angular/router';
import { Signin } from './auth/signin/signin';
import { Signup } from './auth/signup/signup';
import { Project } from './project/project';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'signin', component: Signin },
  { path: 'signup', component: Signup },
  { path: 'projects', component: Project },
];
