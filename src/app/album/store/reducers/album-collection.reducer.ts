import * as albumAction from '../actions/album-collection.action';
import { Album, Status, OrderBy, FilterBy } from '../../models';

export interface AlbumCollectionState {
  entities: { [id: number]: Album };
  details: {[id: number]: Album[]};
  status: Status;
  orderBy: OrderBy;
  filterBy: FilterBy;
  count: number;
}

export const initialState: AlbumCollectionState = {
  entities: {},
  details: {},
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

    /* Details */
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
      const albums: Album[] = action.payload;
      let details;
      if(albums.length > 0){
        details = { ...state.details, [albums[0].collectionId]: albums };
      } else {
        details = state.details;
      }

      return {
        ...state,
        status: new Status({
          loading: false,
          loaded: Object.keys(state.entities).length > 0
        }),
        details
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
