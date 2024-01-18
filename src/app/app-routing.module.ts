import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ImagesComponent } from './images/images.component';
import { Login2Component } from './login2/login2.component';
import { ReseauComponent } from './reseau/reseau.component';
import { GroupeComponent } from './groupe/groupe.component';
import { LastComponent } from './last/last.component';
import { FormComponent } from './form/form.component';
import { PrimeComponent } from './prime/prime.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'contact',component: ContactComponent},
  {path:'images',component: ImagesComponent},
  {path:'login2',component: Login2Component},
  {path:'reseau',component: ReseauComponent},
  {path:'groupe',component: GroupeComponent},
  {path:'last',component: LastComponent},
  {path:'form',component: FormComponent},
  {path:'prime',component: PrimeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
