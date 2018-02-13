import { createFeatureSelector } from '@ngrx/store';
import { AlbumFeatureState } from './album.feature.state';

export const getAlbumStore = createFeatureSelector<AlbumFeatureState>('album');

export * from '../../store/states/album.feature.state';
export * from '../states/album.collection.state';