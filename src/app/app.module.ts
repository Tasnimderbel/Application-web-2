import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { FormComponent } from './form/form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ImagesComponent } from './images/images.component';
import { Login2Component } from './login2/login2.component';
import { ReseauComponent } from './reseau/reseau.component';
import { GroupeComponent } from './groupe/groupe.component';
import { LastComponent } from './last/last.component';
import { PrimeComponent } from './prime/prime.component';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    FormComponent,
    LoginComponent,
    ContactComponent,
    ImagesComponent,
    Login2Component,
    ReseauComponent,
    GroupeComponent,
    LastComponent,
    PrimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TabMenuModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
