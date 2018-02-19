import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Album } from '../../models';
import { selectAlbumsState } from '../reducers';
//import * as fromAlbumsReducer from '../reducers'

//export const selectAlbumsState = createFeatureSelector<fromAlbumsReducer.State>('albums');

/* export const selectAlbumsLoaded = createSelector(
  getAlbumStore,
  state => state.albums.loaded
); */

export const selectAlbumsLoaded = createSelector(
  selectAlbumsState,
  state => state.loaded
);