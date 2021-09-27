import { UsersModule } from './@admin/pages/users/users.module';
import { ContactModule } from './@public/pages/contact/contact.module';
import { HomeModule } from './@public/pages/home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  
 
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'  

  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'  

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
