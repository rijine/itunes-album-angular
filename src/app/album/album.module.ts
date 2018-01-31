import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AlbumRoutingModule } from './album-routing.module';
import { SharedModule } from '../shared/shared.module';

import {
  AlbumItemComponent,
  AlbumListComponent,
  TrackListComponent,
  TrackItemComponent,
  AlbumImageComponent
} from './components';
import { AlbumsComponent, AlbumDetailsComponent } from './containers';
import { AlbumService } from './services';
import { albumEffects, albumReducers } from './store';
import * as fromGuards from './guards';

import { TrackTimePipe } from './pipes';

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
    AlbumDetailsComponent,
    TrackListComponent,
    TrackItemComponent,
    TrackTimePipe,
    AlbumImageComponent
  ],
  providers: [fromGuards.guards, AlbumService]
})
export class AlbumModule {}
