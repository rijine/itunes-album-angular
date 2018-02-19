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

/* filtering entire list */
export const getAlbumsByFilter = createSelector(
  selectAllAlbums,
  getFilterParameters,
  (albums, filters) => {
    const search = filters.filter.toLowerCase();
    let filtered = albums.filter(album => {
      if (album[filters.filterOn].toLowerCase().indexOf(search) > -1) {
        return album;
      }
    });
    return filtered;
  }
);

export const getAlbumsByFilterAndSort = createSelector(
  getAlbumsByFilter,
  getSortParameters,
  (albums, sortBy) => {
    let sortAlbums = (a: Album, b: Album) =>
      a[sortBy.orderBy].toLowerCase() < b[sortBy.orderBy].toLowerCase() ? -1 : 1;
    let sorted = albums.sort(sortAlbums);
    if (sortBy.direction === 'DESC') {
      sorted = sorted.reverse();
    }
    return sorted;
  }
);
