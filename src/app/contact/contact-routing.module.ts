import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

const routes: Routes = [
  { path: '', component: ContactComponent },
  { path: 'add', component: AddContactComponent },
  { path: 'update', component: UpdateContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
