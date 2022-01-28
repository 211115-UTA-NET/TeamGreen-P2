import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UnitsComponent } from './units/units.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { BrowseComponent } from './browse/browse.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommentsComponent } from './comments/comments.component';
import { FormsModule } from '@angular/forms';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { OwnerUnitsComponent } from './owner-units/owner-units.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitsComponent,
    LoginComponent,
    NewUserComponent,
    BrowseComponent,
    UnitDetailsComponent,
    DashboardComponent,
    CommentsComponent,
    OwnerLoginComponent,
    OwnerUnitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule/**,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
