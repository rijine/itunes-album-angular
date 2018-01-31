import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumItemComponent, AlbumListComponent } from './components';
import { AlbumsComponent, AlbumDetailsComponent } from './containers';
import { AlbumService } from './services';
import { albumEffects, albumReducers } from './store';
import * as fromGuards from './guards';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlbumRoutingModule,
    FlexLayoutModule,
    BsDropdownModule.forRoot(),
    StoreModule.forFeature('album', albumReducers),
    EffectsModule.forFeature(albumEffects),
    SharedModule
  ],
  declarations: [
    AlbumListComponent,
    AlbumItemComponent,
    AlbumsComponent,
    AlbumDetailsComponent
  ],
  providers: [fromGuards.guards, AlbumService]
})
export class AlbumModule {}
