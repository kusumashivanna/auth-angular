import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent, AddContactComponent, UpdateContactComponent],
  imports: [CommonModule, ContactRoutingModule],
})
export class ContactModule {}
