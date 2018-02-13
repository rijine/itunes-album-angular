import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getAlbumStore } from '../reducers';
import * as fromRoot from '../../../store';
import { Album } from '../../models';
import { Observable } from 'rxjs/Observable';
/* import { AlbumCollectionState } from '../states';
import { getAlbumStore } from '../states';
 */

export const getAlbumCollection = createSelector(
  getAlbumStore,
  state => state.albumCollection
);

export const getAlbumEntities = createSelector(
  getAlbumCollection,
  state => state.entities
);

export const getAllAlbums = createSelector(getAlbumEntities, entities => {
  return Object.keys(entities).map(
    collectionId => entities[parseInt(collectionId, 10)]
  );
});

export const getSortParameters = createSelector(
  getAlbumCollection,
  state => state.orderBy
);

export const getFilterParameters = createSelector(
  getAlbumCollection,
  state => state.filterBy
);

/* Just by sorting entire list */
export const getAlbumsByOrder = createSelector(
  getAllAlbums,
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

/* filtering entire list */
export const getAlbumsByFilter = createSelector(
  getAllAlbums,
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

/* Filter and Sort => using*/
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

export const getSelectedAlbumExists = createSelector(
  getAlbumCollection,
  fromRoot.getRouterState,
  (state, router): boolean => {
    return router.state && state.details && !!state.details[router.state.params.collectionId];
  }
);

export const getSelectedAlbum = createSelector(
  getAlbumCollection,
  fromRoot.getRouterState,
  (state, router): Album => {
    return router.state && state.details[router.state.params.collectionId] && state.details[router.state.params.collectionId][0];
  }
);

export const getSelectedAlbumTracks = createSelector(
  getAlbumCollection,
  fromRoot.getRouterState,
  (state, router): Album[] => {
    return router.state && state.details[router.state.params.collectionId] && state.details[router.state.params.collectionId].slice(1,-1);
  }
);

export const getAlbumById = (collectionId: number) =>
  createSelector(getAlbumEntities, entities => entities[collectionId]);

export const getAlbumsLoaded = createSelector(
  getAlbumCollection,
  state => state.status.loaded
);

export const getAlbumsLoading = createSelector(
  getAlbumCollection,
  state => state.status.loading
);

