import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfilePage,
    children:[
      { path: 'events', loadChildren: '../events/events.module#EventsPageModule' },
      { path: 'professionals', loadChildren: '../professionals/professionals.module#ProfessionalsPageModule' },
      { path: 'perfil', loadChildren: '../perfil/perfil.module#PerfilPageModule' }
    ]
  },
  {
    path:'',
    redirectTo: 'profile/perfil',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
