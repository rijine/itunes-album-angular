import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Album } from '../../models';
import { getAlbumStore } from '../reducers';
import * as albumsReducer from '../reducers/album.reducer';

//import * as fromAlbumsReducer from '../reducers'

/* export const selectAlbumsLoaded = createSelector(
  getAlbumStore,
  state => state.albums.loaded
); */

/* export const selectAlbumsLoaded = createSelector(
  selectAlbumsState,
  state => state.loaded
); */

export const selectAlbumsState = createSelector(
  getAlbumStore,
  state => state.albums
);
export const {
  selectIds,
  selectEntities,
  selectAll: selectAllAlbums,
  selectTotal
} = albumsReducer.adapter.getSelectors(selectAlbumsState);

export const selectAlbumsLoaded = createSelector(
  selectAlbumsState,
  state => state.status.loaded
);

export const getSortParameters = createSelector(
  selectAlbumsState,
  state => state.orderBy
);

export const getFilterParameters = createSelector(
  selectAlbumsState,
  state => state.filterBy
);
