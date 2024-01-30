import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LogInComponent } from './log-in/log-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { authGuardGuard } from './auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'', component:HomeComponent},
  {path:'login',component:LogInComponent},
  {path:'dashboard',component:DashboardComponent,  //canActivate:[authGuardGuard]
   },
  //{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)},
  {path:'profile',component:ProfileComponent},
 // { path: 'profile', loadChildren: () => import('./profile/profile.component').then(m => m.ProfileComponent)},
  {path:'createaccount',component:CreateAccountComponent},
  {path:'client',component:AboutComponent, // canActivate:[authGuardGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
