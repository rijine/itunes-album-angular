import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import {
  AlbumCollectionState,
  albumCollectionReducer
} from './album-collection.reducer';

export interface AlbumFeatureState {
  albums: AlbumCollectionState;
}

export const albumReducers: ActionReducerMap<AlbumFeatureState> = {
  albums: albumCollectionReducer
};

export const getAlbumStore = createFeatureSelector<AlbumFeatureState>('album');



export * from './album-collection.reducer';
