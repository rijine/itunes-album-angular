import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Album } from '../../models/album';
import { OrderBy, FilterBy } from '../../models';

export enum AlbumActionTypes {
  LoadAlbums = '[Album] Load Albums',
  LoadAlbumsSuccess = '[Album] Load Albums Success',
  LoadAlbumsFail = '[Album] Load Albums Fail',
  UpdateAlbumsSortOrder = '[Album] Update Albums SortOrder',
  UpdateAlbumsFilter = '[Album] Update Albums Filter ',
  AddAlbum = '[Album] Add Album',
  UpsertAlbum = '[Album] Upsert Album',
  AddAlbums = '[Album] Add Albums',
  UpsertAlbums = '[Album] Upsert Albums',
  UpdateAlbum = '[Album] Update Album',
  UpdateAlbums = '[Album] Update Albums',
  DeleteAlbum = '[Album] Delete Album',
  DeleteAlbums = '[Album] Delete Albums',
  ClearAlbums = '[Album] Clear Albums'
}

export class LoadAlbums implements Action {
  readonly type = AlbumActionTypes.LoadAlbums;
  //constructor(public payload: { albums: Album[] }) {}
}

export class LoadAlbumsSuccess implements Action {
  readonly type = AlbumActionTypes.LoadAlbumsSuccess;

  constructor(public payload: { albums: Album[] }) {}
}

export class LoadAlbumsFail implements Action {
  readonly type = AlbumActionTypes.LoadAlbumsFail;

  constructor(public payload: { error: any }) {}
}

export class UpdateAlbumsSortOrder implements Action {
  readonly type = AlbumActionTypes.UpdateAlbumsSortOrder;

  constructor(public payload: { orderBy: OrderBy }) {}
}

export class UpdateAlbumsFilter implements Action {
  readonly type = AlbumActionTypes.UpdateAlbumsFilter;

  constructor(public payload: { filterBy: FilterBy }) {}
}

export class AddAlbum implements Action {
  readonly type = AlbumActionTypes.AddAlbum;

  constructor(public payload: { album: Album }) {}
}

export class UpsertAlbum implements Action {
  readonly type = AlbumActionTypes.UpsertAlbum;

  constructor(public payload: { album: Album }) {}
}

export class AddAlbums implements Action {
  readonly type = AlbumActionTypes.AddAlbums;

  constructor(public payload: { albums: Album[] }) {}
}

export class UpsertAlbums implements Action {
  readonly type = AlbumActionTypes.UpsertAlbums;

  constructor(public payload: { albums: Album[] }) {}
}

export class UpdateAlbum implements Action {
  readonly type = AlbumActionTypes.UpdateAlbum;

  constructor(public payload: { album: Update<Album> }) {}
}

export class UpdateAlbums implements Action {
  readonly type = AlbumActionTypes.UpdateAlbums;

  constructor(public payload: { albums: Update<Album>[] }) {}
}

export class DeleteAlbum implements Action {
  readonly type = AlbumActionTypes.DeleteAlbum;

  constructor(public payload: { id: string }) {}
}

export class DeleteAlbums implements Action {
  readonly type = AlbumActionTypes.DeleteAlbums;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearAlbums implements Action {
  readonly type = AlbumActionTypes.ClearAlbums;
}

export type AlbumActions =
  | LoadAlbums
  | LoadAlbumsSuccess
  | LoadAlbumsFail
  | UpdateAlbumsFilter
  | UpdateAlbumsSortOrder
  | AddAlbum
  | UpsertAlbum
  | AddAlbums
  | UpsertAlbums
  | UpdateAlbum
  | UpdateAlbums
  | DeleteAlbum
  | DeleteAlbums
  | ClearAlbums;
