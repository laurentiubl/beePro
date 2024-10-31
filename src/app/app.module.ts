import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DashboardComponent} from './dashboard-component/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import {BeeTypeComponent} from './shared/bee-type/bee-type.component';
import {FilterByTypePipe} from './shared/pipes/filter-by-type.pipe';
import {MatList, MatListItem} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BeeTypeComponent,
    FilterByTypePipe
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    MatList,
    MatListItem,
    MatIcon
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
