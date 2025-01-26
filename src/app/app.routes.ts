import { Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full',
   
},
  {
    path:'home',
    component:DashboardComponent,
    title:'Home page',
    canActivate:[authGuard]
    
  },
  {
    path:'aboutus',
    component:AboutusComponent,
    title:'About US',
    canActivate:[authGuard]
  },
  {
    path:'contactus',
    component:ContactusComponent,
    title:'Contact US',
    canActivate:[authGuard]
  },
  {
    path:'login',
    component:LoginComponent,
    title:'Login'
  },
  {
    path:'**',
    component:PageNotFoundComponent,
    title:'Page Not Found'
  }
];
