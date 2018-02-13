import { ActionReducerMap } from '@ngrx/store';
import {
  albumCollectionReducer
} from './album-collection.reducer';
import { AlbumFeatureState } from '../states/album.feature.state';


export const albumReducers: ActionReducerMap<AlbumFeatureState> = {
  albumCollection: albumCollectionReducer
};

//export const getAlbumStore = createFeatureSelector<AlbumFeatureState>('album');

export * from './album-collection.reducer';
