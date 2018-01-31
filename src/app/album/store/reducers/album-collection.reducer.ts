import * as albumAction from '../actions/album-collection.action';
import { Album, Status, OrderBy, FilterBy } from '../../models';

export interface AlbumCollectionState {
  entities: { [id: number]: Album };
  status: Status;
  orderBy: OrderBy;
  filterBy: FilterBy;
  count: number;
}

export const initialState: AlbumCollectionState = {
  entities: {},
  status: new Status({ loading: false, loaded: false }),
  orderBy: new OrderBy({ orderBy: 'collectionName', displayName: 'Album' }),
  filterBy: new FilterBy({filterOn: 'collectionName'}),
  count: 0
};

export function albumCollectionReducer(
  state = initialState,
  action: albumAction.AlbumCollectionAction
): AlbumCollectionState {
  switch (action.type) {
    case albumAction.AlbumCollectionActionTypes.LoadAlbums: {
      return {
        ...state,
        status: new Status({
          loading: true,
          loaded: false
        })
      };
    }
    case albumAction.AlbumCollectionActionTypes.LoadAlbumsSuccess: {
      const albums = action.payload;
      const entities = albums.reduce(
        (entities: { [id: number]: Album }, album: Album) => {
          return {
            ...entities,
            [album.collectionId]: album
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        status: new Status({
          loading: false,
          loaded: true
        }),
        entities
      };
    }
    case albumAction.AlbumCollectionActionTypes.LoadAlbumsFail: {
      const data = action.payload;
      return {
        ...state,
        status: new Status({
          loading: false,
          loaded: false
        })
      };
    }
    case albumAction.AlbumCollectionActionTypes.LoadSingleAlbum: {
      const data = action.payload;
      return {
        ...state,
        status: new Status({
          loading: true,
          loaded: false
        })
      };
    }

    case albumAction.AlbumCollectionActionTypes.LoadSingleAlbumFail: {
      const data = action.payload;
      return {
        ...state,
        status: new Status({
          loading: false,
          loaded: false
        })
      };
    }

    case albumAction.AlbumCollectionActionTypes.LoadSingleAlbumSuccess: {
      const album: Album = action.payload;
      const entities = { ...state.entities, [album.collectionId]: album };
      return {
        ...state,
        status: new Status({
          loading: false,
          loaded: true
        }),
        entities
      };
    }

    case albumAction.AlbumCollectionActionTypes.UpdateAlbumsSortOrder: {
      const orderBy: OrderBy = action.payload;
      return {
        ...state,
        orderBy
      }
    }

    case albumAction.AlbumCollectionActionTypes.UpdateAlbumsFilter: {
      const filterBy: FilterBy = action.payload;
      return {
        ...state,
        filterBy
      }
    }

    case albumAction.AlbumCollectionActionTypes.CounterUpdate: {
      const count = state.count++;
      return {
        ...state,
        count
      }
    }
  }
  return state;
}
