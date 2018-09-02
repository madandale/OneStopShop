import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardDetailsComponent } from './card/card-details/card-details.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { ProductComponent } from './product/product.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { MaterialModule } from './material.module';


const appRoutes: Routes = [
{ path: '', 
redirectTo: '/home', 
pathMatch: 'full' 
},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: 'products', component: ProductcardComponent},
  {path: 'cardDetails', component: CardDetailsComponent}





  // {
  //   path: 'cardDetails',
  //   children: [
  //     {
  //       path: '',
  //       component: CrisisListComponent,
  //       children: [
  //         {
  //           path: ':id',
  //           component: CrisisDetailComponent
  //         },
  //         {
  //           path: '',
  //           component: CrisisCenterHomeComponent
  //         }
  //       ]
  //     }
  //   ]
  // }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardDetailsComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    AdminLoginComponent,
    AdminSignUpComponent,
    ProductComponent,
    ContactUsComponent,
    ServicesComponent,
    ProductcardComponent
    ],
  imports: [
     BrowserModule,
     MaterialModule,
     RouterModule.forRoot(appRoutes)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
