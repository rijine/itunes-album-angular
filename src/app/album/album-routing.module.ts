import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AlbumDetailsComponent,
  AlbumsComponent
} from './containers';
import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent,
    canActivate: [fromGuards.AlbumsGuard]
  },
  {
    path: ':collectionId',
    component: AlbumDetailsComponent,
    canActivate: [fromGuards.AlbumExistsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule {}
