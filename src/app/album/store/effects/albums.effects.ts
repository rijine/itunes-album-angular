import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of'

import { AlbumService } from '../../services';
import * as albumsActions from '../actions/album.actions';
import { Album } from '../../models';

@Injectable()
export class AlbumsEffects {

  constructor(private actions$: Actions, private albumService: AlbumService) {}
  @Effect()
  loadAlbums$ = this.actions$
    .ofType(albumsActions.AlbumActionTypes.LoadAlbums)
    .pipe(
      switchMap(() => {
        return this.albumService
          .getAlbums()
          .pipe(
            map(
              (albums: Album[]) =>
                new albumsActions.LoadAlbumsSuccess({albums})
            ),
            catchError(error =>
              of(new albumsActions.LoadAlbumsFail({error}))
            )
          );
      })
    );
}
