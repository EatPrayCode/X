import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { GroupsComponent } from './groups.component';

const routes: Routes = [
  {
    path: '',
    component: GroupsComponent,
    // children: [
    //   {
    //     path: '/:id',
    //     component:  ContactsComponent,
    //     data: { title: 'app.connect.menu.connect-new' },
    //   }
    // ]
  },
  {
    path: ':id',
    component:  ContactsComponent,
    data: { title: 'app.connect.menu.connect-new' },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
