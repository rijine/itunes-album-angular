import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as albumActions from '../actions/album-collection.action';
import { AlbumService } from '../../services';
import { Album } from '../../models';

@Injectable()
export class AlbumEffects {
  constructor(private actions$: Actions, private albumService: AlbumService) {}

  @Effect()
  loadAlbums$ = this.actions$
    .ofType(albumActions.AlbumCollectionActionTypes.LoadAlbums)
    .pipe(
      switchMap(() => {
        return this.albumService
          .getAlbums()
          .pipe(
            map(
              (albums: Album[]) =>
                new albumActions.LoadAlbumCollectionSuccess(albums)
            ),
            catchError(error =>
              of(new albumActions.LoadAlbumCollectionFail(error))
            )
          );
      })
    );

  @Effect()
  $loadAlbum = this.actions$
    .ofType(albumActions.AlbumCollectionActionTypes.LoadSingleAlbum)
    .pipe(
      map((action: albumActions.LoadSingleAlbum) => action.payload),
      switchMap(payload => {
        return this.albumService
          .getAlbum(payload)
          .pipe(
            map(
              (albums: Album[]) => new albumActions.LoadSingleAlbumSuccess(albums)
            ),
            catchError(error => of(new albumActions.LoadSingleAlbumFail(error)))
          );
      })
    );
}
