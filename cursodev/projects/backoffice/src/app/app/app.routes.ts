import { Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { Course } from "../course/course";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: Course },
  { path: '**', redirectTo: 'login' }
];
