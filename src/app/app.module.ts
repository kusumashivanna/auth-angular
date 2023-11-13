import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from './service/auth-service.service';
import { ProductService } from './service/product.service';
import { AuthGuardGuard } from './AuthGuard/auth-guard.guard';
import { RouterModule } from '@angular/router';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { UpdateContactComponent } from './contact/update-contact/update-contact.component';
import { ChildAuthGuardGuard } from './AuthGuard/child-auth-guard.guard';

@NgModule({
  declarations: [AppComponent, ProductComponent, LoginComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    AuthServiceService,
    ProductService,
    AuthGuardGuard,
    ChildAuthGuardGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
