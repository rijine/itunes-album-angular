import { createFeatureSelector, ActionReducerMap, createSelector } from '@ngrx/store';
/* import {
  albumCollectionReducer, AlbumCollectionState
} from './album-collection.reducer'; */
import * as albumsReducer from './album.reducer';


export interface AlbumModuleState {
  //albumCollection: AlbumCollectionState;
  albums: albumsReducer.AlbumsState
}

export const albumReducers: ActionReducerMap<AlbumModuleState> = {
  //albumCollection: albumCollectionReducer,
  albums: albumsReducer.reducer
};

export const getAlbumStore = createFeatureSelector<AlbumModuleState>('album');
/* export const selectAlbumsState = createSelector(
  getAlbumStore,
  (state) => state.albums
); */
//export * from './album-collection.reducer';


export * from './album.reducer';
