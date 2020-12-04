import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddFileComponent } from './add-file/add-file.component';
import { DeleteFileComponent } from './delete-file/delete-file.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"register",component:RegistrationComponent},
  {path:"admin",component:AdminComponent},
  {path:"adminhome",component:AdminHomeComponent},
  {path:"addfile",component:AddFileComponent},
  {path:"delfile",component:DeleteFileComponent},
  {path:"forgotpassword",component:ForgotPasswordComponent},
  {path:"company",component:CompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
