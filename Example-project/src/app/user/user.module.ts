import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ClarityModule } from '@clr/angular';
import { UserRoutingModule } from './user-routing.module';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent,
    DeleteUserComponent,
    AddComponent
  ],
  imports: [
    CommonModule,ClarityModule,UserRoutingModule,FormsModule,ReactiveFormsModule
  ],
  exports:[UserComponent,DeleteUserComponent]
})
export class UserModule {}
