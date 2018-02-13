import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as albumStore from '../../store';
import * as albumAction from '../../store/actions';
import * as albumSelector from '../../store/selectors';

import { AlbumService } from '../../services';
import { Album } from '../../models';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {
  album$: Observable<Album>;
  albumTracks$: Observable<Album[]>;
  constructor(private store: Store<albumStore.AlbumModuleState>) {}

  ngOnInit() {
    this.album$ = this.store.select(albumSelector.getSelectedAlbum);
    this.albumTracks$ = this.store.select(albumSelector.getSelectedAlbumTracks);
  }

  gotoAlbums() {
    // this.store.dispatch()
  }
}
