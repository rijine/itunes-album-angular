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
  constructor(private store: Store<fromStore.AlbumsState>) {}
  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError((error) => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    this.store.select(fromStore.selectAlbumsLoaded).subscribe((x) => console.log(x));
    return this.store.select(fromStore.selectAlbumsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadAlbums());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );

    /* return this.store.select(fromStore.getAlbumsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadAlbumCollection());
        }
      }),
      filter(loaded => loaded),
      take(1)
    ); */
  }
}
