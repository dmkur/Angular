import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { UsersComponent } from './components/users/users.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import { StateInfoComponent } from './components/state-info/state-info.component';
import { ServerInfoComponent } from './components/server-info/server-info.component';
import {UserResolveService} from "./services/user-resolve.service";

let routes:Routes = [
  {path:'stateInfo/:id', component: StateInfoComponent},
  {path:'serverInfo/:id', component: ServerInfoComponent, resolve:{data:UserResolveService}},

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    StateInfoComponent,
    ServerInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
