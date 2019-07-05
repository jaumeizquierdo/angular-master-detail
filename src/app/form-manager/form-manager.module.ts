import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberManagerComponent } from './member-manager/member-manager.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MyFormModule } from '../my-form/my-form.module';

@NgModule({
  declarations: [MemberManagerComponent, MemberListComponent],
  imports: [
    CommonModule, MyFormModule
  ],
  exports: [MemberManagerComponent, MemberListComponent]
})
export class FormManagerModule { }
