import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PlayToolsComponent } from './play-tools.component';

const routes: Routes = [
  {
    path: '',
    component: PlayToolsComponent,
    data: {
      title: 'PlayTools'
    }
  }, {
    path: ':id',
    component: PlayToolsComponent,
    data: {
      title: 'PlayTools'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class PlayToolsRoutingModule { }
