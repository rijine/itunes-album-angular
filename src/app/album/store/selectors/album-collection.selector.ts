import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAlbumStore from '../reducers';
import * as fromRoot from '../../../store';
import { Album } from '../../models';
import { Observable } from 'rxjs/Observable';

export const getAlbumCollection = createSelector(
  fromAlbumStore.getAlbumStore,
  state => state.albums
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

export const getSelectedAlbum = createSelector(
  getAlbumEntities,
  fromRoot.getRouterState,
  (entities, router): Album => {
    return router.state && entities[router.state.params.collectionId];
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

