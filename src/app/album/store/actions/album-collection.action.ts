import { Action } from '@ngrx/store';
import { Album, OrderBy, FilterBy } from '../../models';

export enum AlbumCollectionActionTypes {
  LoadAlbums = '[Album] Load albums',
  LoadAlbumsFail = '[Album] Load albums failed',
  LoadAlbumsSuccess = '[Album] Load albums success',

  LoadSingleAlbum = '[Album] Load single album',
  LoadSingleAlbumFail = '[Album] Load single album failed',
  LoadSingleAlbumSuccess = '[Album] Load single album success',

  UpdateAlbumsSortOrder = '[Album] Sort order Update',
  UpdateAlbumsFilter = '[Album] Filter Update',
  CounterUpdate = '[Album] Counter Update'
}
export class LoadAlbumCollection implements Action {
  readonly type = AlbumCollectionActionTypes.LoadAlbums;
}

export class LoadAlbumCollectionFail implements Action {
  readonly type = AlbumCollectionActionTypes.LoadAlbumsFail;
  constructor(public payload: any) {}
}

export class LoadAlbumCollectionSuccess implements Action {
  readonly type = AlbumCollectionActionTypes.LoadAlbumsSuccess;
  constructor(public payload: Album[]) {}
}

/*
 Loading single item missing in collection
 */
export class LoadSingleAlbum implements Action {
  readonly type = AlbumCollectionActionTypes.LoadSingleAlbum;
  constructor(public payload: number) {}
}

export class LoadSingleAlbumFail implements Action {
  readonly type = AlbumCollectionActionTypes.LoadSingleAlbumFail;
  constructor(public payload: any) {}
}

export class LoadSingleAlbumSuccess implements Action {
  readonly type = AlbumCollectionActionTypes.LoadSingleAlbumSuccess;
  constructor(public payload: Album[]) {}
}

//Sorting
export class UpdateAlbumsSortOrder implements Action {
  readonly type = AlbumCollectionActionTypes.UpdateAlbumsSortOrder;
  constructor(public payload: OrderBy) {}
}

//Filter
export class UpdateAlbumsFilter implements Action {
  readonly type = AlbumCollectionActionTypes.UpdateAlbumsFilter;
  constructor(public payload: FilterBy) {}
}

export class CounterUpdate implements Action {
  readonly type = AlbumCollectionActionTypes.CounterUpdate;
  constructor(public payload: any) {}
}

export type AlbumCollectionAction =
  | LoadAlbumCollection
  | LoadAlbumCollectionFail
  | LoadAlbumCollectionSuccess
  | LoadSingleAlbum
  | LoadSingleAlbumFail
  | LoadSingleAlbumSuccess
  | UpdateAlbumsSortOrder
  | UpdateAlbumsFilter
  | CounterUpdate;
