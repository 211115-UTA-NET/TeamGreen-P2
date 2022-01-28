import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UnitsComponent } from './units/units.component';
import { BrowseComponent } from './browse/browse.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { LoginComponent } from './login/login.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { OwnerUnitsComponent } from './owner-units/owner-units.component';
import { CommentsComponent } from './comments/comments.component';
import { AddUnitComponent } from './add-unit/add-unit.component';

const routes: Routes = [ 
  { path: 'units', component: UnitsComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'unit-details/:Unit_ID', component: UnitDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'owner-login', component: OwnerLoginComponent },
  { path: 'owner-units/:User_ID', component: OwnerUnitsComponent },
  { path: 'unit-detail/:Unit_ID/comments/', component: CommentsComponent },
  { path: 'add-unit/:User_ID', component: AddUnitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
