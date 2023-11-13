import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { AuthGuardGuard } from './AuthGuard/auth-guard.guard';
import { ChildAuthGuardGuard } from './AuthGuard/child-auth-guard.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'contact',
    // component: ContactComponent,
    canActivateChild: [ChildAuthGuardGuard],
    data: { expectedRole: 'users' },

    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [AuthGuardGuard],
    data: { expectedRole: 'admin' },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
