import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { map, tap, take, filter, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Store } from '@ngrx/store';

import * as fromStore from '../store';
import { Album } from '../models';
import { AlbumFeatureState } from '../store/states';

@Injectable()
export class AlbumExistsGuard implements CanActivate {
  constructor(private store: Store<AlbumFeatureState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {

    const collectionId = parseInt(route.params.collectionId, 10)
    /*return this.checkStore().pipe(
      switchMap(() => {
        const collectionId = parseInt(route.params.collectionId, 10);
        return this.hasAlbum(collectionId);
      })
    ); */
    return this.hasAlbum(collectionId);
  }

  hasAlbum(collectionId: number): Observable<boolean> {
    return this.store.select(fromStore.getSelectedAlbumExists).pipe(
      //map((albumDetails: Album[]) => albumDetails && albumDetails.length > 0),
      tap((exists: boolean) => {
        if (!exists) {
          this.store.dispatch(new fromStore.LoadSingleAlbum(collectionId));
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  /* checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getAlbumsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadAlbumCollection());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  } */
}
