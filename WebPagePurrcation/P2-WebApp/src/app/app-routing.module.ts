import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UnitsComponent } from './units/units.component';
import { BrowseComponent } from './browse/browse.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
  { path: 'units', component: UnitsComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'unit-details', component: UnitDetailsComponent },
  { path: 'login', component: LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
