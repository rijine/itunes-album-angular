/* import * as fromAlbumCollectionReducer from './album-collection.reducer';
import * as fromAlbumCollectionAction from '../actions/album-collection.action';
import { Album } from '../../models';

describe('AlbumCollectionReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromAlbumCollectionReducer;
      const action = {} as any;
      const state = fromAlbumCollectionReducer.albumCollectionReducer(
        undefined,
        action
      );
      expect(state).toBe(initialState);
    });
  });

  describe('LoadAlbumCollection action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromAlbumCollectionReducer;
      const action = new fromAlbumCollectionAction.LoadAlbumCollection();
      const state = fromAlbumCollectionReducer.albumCollectionReducer(
        initialState,
        action
      );

      expect(state.status.loading).toEqual(true);
      expect(state.status.loaded).toEqual(false);
      expect(state.entities).toEqual({});
    });
  });

  describe('LoadAlbumCollectionSuccess action', () => {
    it('should populate the albums array', () => {
      const albums: Album[] = [
        {
          wrapperType: 'collection',
          collectionType: 'Album',
          artistId: 136975,
          collectionId: 402060584,
          amgArtistId: 3644,
          artistName: 'The Beatles',
          collectionName: 'The Beatles Box Set',
          collectionCensoredName: 'The Beatles Box Set',
          artistViewUrl:
            'https://itunes.apple.com/us/artist/the-beatles/136975?uo=4',
          collectionViewUrl:
            'https://itunes.apple.com/us/album/the-beatles-box-set/402060584?uo=4',
          artworkUrl60:
            'http://is1.mzstatic.com/image/thumb/Music/v4/98/10/bd/9810bd86-9023-fb20-c6d8-d15e6a25222e/source/60x60bb.jpg',
          artworkUrl100:
            'http://is1.mzstatic.com/image/thumb/Music/v4/98/10/bd/9810bd86-9023-fb20-c6d8-d15e6a25222e/source/100x100bb.jpg',
          collectionPrice: 149.99,
          collectionExplicitness: 'notExplicit',
          trackCount: 256,
          copyright:
            '℗ 2010 The copyright in this audio & audiovisual compilation is owned by EMI Records Ltd',
          country: 'USA',
          currency: 'USD',
          releaseDate: '2009-09-09T07:00:00Z',
          primaryGenreName: 'Rock'
        }
      ];
      const entities = {
        402060584: albums[0]
      };
      const { initialState } = fromAlbumCollectionReducer;
      const action = new fromAlbumCollectionAction.LoadAlbumCollectionSuccess(
        albums
      );
      const state = fromAlbumCollectionReducer.albumCollectionReducer(
        initialState,
        action
      );

      expect(state.status.loaded).toEqual(true);
      expect(state.status.loading).toEqual(false);
      expect(state.entities).toEqual(entities);
    });
  });

  describe('LoadAlbumCollectionFail action', () => {
    it('should return the initial state', () => {
      const { initialState } = fromAlbumCollectionReducer;
      const action = new fromAlbumCollectionAction.LoadAlbumCollectionFail({});
      const state = fromAlbumCollectionReducer.albumCollectionReducer(
        initialState,
        action
      );

      expect(state).toEqual(initialState);
    });

    it('should return the previous state', () => {
      const { initialState } = fromAlbumCollectionReducer;
      const previousState = { ...initialState, loading: true };
      const action = new fromAlbumCollectionAction.LoadAlbumCollectionFail({});
      const state = fromAlbumCollectionReducer.albumCollectionReducer(
        previousState,
        action
      );

      expect(state).toEqual(initialState);
    });
  });
});
 */