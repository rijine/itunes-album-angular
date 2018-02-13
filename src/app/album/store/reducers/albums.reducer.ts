import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { AlbumsState } from '../states';

import { Album } from "../../models";

export const albumsAdapter: EntityAdapter<Album> = createEntityAdapter<Album>({
  selectId: (album: Album) => album.collectionId
});

const initalState: AlbumsState = albumsAdapter.getInitialState({
  selectedAlbumId: null
});

export function albumsReducer (state = initalState, action): AlbumsState {

  return null;
}

