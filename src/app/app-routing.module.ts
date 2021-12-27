import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';

const routes: Routes = [
  {
    path:'user',
    children:[
      {path:'view',component:ViewUsersComponent},
      {path:'edit/:id',component:EditUserComponent},
      {path:'delete/:id',component:DeleteUserComponent},
      {path:'create',component:AddUserComponent},
      {path:'view/:id',component:ViewUserComponent}
     
   ]},
  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
