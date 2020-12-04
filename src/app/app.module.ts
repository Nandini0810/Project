import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddFileComponent } from './add-file/add-file.component';
import { DeleteFileComponent } from './delete-file/delete-file.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CompanyComponent } from './company/company.component';
import { CompanyService } from './services/companyService';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    AdminComponent,
    AdminHomeComponent,
    AddFileComponent,
    DeleteFileComponent,
    ForgotPasswordComponent,
    CompanyComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
