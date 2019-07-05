import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberManagerComponent } from './form-manager/member-manager/member-manager.component';
import { HomeComponent } from './global/home/home.component';
import { NotfoundComponent } from './global/notfound/notfound.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'members', component: MemberManagerComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
