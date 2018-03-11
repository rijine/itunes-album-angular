import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';

import { Album } from '../../models/album';
import { AlbumActions, AlbumActionTypes } from '../actions/album.actions';
import { Status, OrderBy, FilterBy } from '../../models';
//import { getAlbumStore } from '../reducers';

export interface AlbumsState extends EntityState<Album> {
  // additional entities state properties
  selectedAlbumId: string | null;
  status: Status;
  orderBy: OrderBy;
  filterBy: FilterBy;
  error: boolean;
}

export const adapter: EntityAdapter<Album> = createEntityAdapter<Album>({
  selectId: (album: Album) => album.collectionId
});

export const initialAlbumsState: AlbumsState = adapter.getInitialState({
  // additional entity state properties
  selectedAlbumId: null,
  status: new Status({ loading: false, loaded: false }),
  orderBy: new OrderBy({ orderBy: 'collectionName', displayName: 'Album' }),
  filterBy: new FilterBy({ filterOn: 'collectionName' }),
  error: false
});

export function reducer(
  state = initialAlbumsState,
  action: AlbumActions
): AlbumsState {
  switch (action.type) {
    case AlbumActionTypes.AddAlbum: {
      return adapter.addOne(action.payload.album, state);
    }

    /* case AlbumActionTypes.UpsertAlbum: {
      return adapter.upsertOne(action.payload.album, state);
    } */

    case AlbumActionTypes.AddAlbums: {
      return adapter.addMany(action.payload.albums, state);
    }

    /* case AlbumActionTypes.UpsertAlbums: {
      return adapter.upsertMany(action.payload.albums, state);
    } */

    case AlbumActionTypes.UpdateAlbum: {
      return adapter.updateOne(action.payload.album, state);
    }

    case AlbumActionTypes.UpdateAlbums: {
      return adapter.updateMany(action.payload.albums, state);
    }

    case AlbumActionTypes.DeleteAlbum: {
      return adapter.removeOne(action.payload.id, state);
    }

    case AlbumActionTypes.DeleteAlbums: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case AlbumActionTypes.LoadAlbums: {
      return {
        ...state,
        status: new Status({
          loading: true,
          loaded: false
        })
      };
    }

    case AlbumActionTypes.LoadAlbumsSuccess: {
      return adapter.addAll(action.payload.albums, {
        ...state,
        status: new Status({
          loading: false,
          loaded: true
        })
      });
    }

    case AlbumActionTypes.LoadAlbumsFail: {
      return {
        ...state,
        status: new Status({
          loading: false,
          loaded: false
        }),
        error: true
      };
    }

    case AlbumActionTypes.UpdateAlbumsSortOrder: {
      const orderBy: OrderBy = action.payload.orderBy;
      return {
        ...state,
        orderBy
      }
    }

    case AlbumActionTypes.UpdateAlbumsFilter: {
      const filterBy: FilterBy = action.payload.filterBy;
      return {
        ...state,
        filterBy
      }
    }

    case AlbumActionTypes.ClearAlbums: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

/* export const selectAlbumsState = createSelector(getAlbumStore, state => state.albums);
export const {
  selectIds,
  selectEntities,
  selectAll: selectAllAlbums,
  selectTotal
} = adapter.getSelectors(selectAlbumsState); */
