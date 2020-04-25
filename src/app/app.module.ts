import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './main-page/employee-list/employee-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddEmployeeComponent } from './main-page/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './main-page/employee-details/employee-details.component';
import { EmployeeEditComponent } from './main-page/employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from './main-page/employee-delete/employee-delete.component';
import { FilterPipe } from './filter.pipe';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:MainPageComponent},
  {path:'employees', component:EmployeeListComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'details/:id', component:EmployeeDetailsComponent},
  {path:'editEmployee/:id', component:EmployeeEditComponent},
  {path:'deleteEmployee/:id', component:EmployeeDeleteComponent},
  {path:'**',component:MainPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeListComponent,
    MainPageComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
