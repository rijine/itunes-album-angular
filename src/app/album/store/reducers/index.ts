import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import {
  albumCollectionReducer, AlbumCollectionState
} from './album-collection.reducer';


export interface AlbumModuleState {
  albumCollection: AlbumCollectionState;
}

export const albumReducers: ActionReducerMap<AlbumModuleState> = {
  albumCollection: albumCollectionReducer
};

export const getAlbumStore = createFeatureSelector<AlbumModuleState>('album');

export * from './album-collection.reducer';
