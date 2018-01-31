import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { tap, take, filter, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';

import { Status } from '../models';

@Injectable()
export class AlbumsGuard implements CanActivate {
  constructor(private store: Store<fromStore.AlbumFeatureState>) {}
  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getAlbumsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadAlbumCollection());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
