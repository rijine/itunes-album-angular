/* import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

import { TestBed } from '@angular/core/testing';
import { Album } from '../../models';

import * as fromRoot from '../../../store';
import * as fromAlbumCollectionReducer from '../reducers';
import * as fromAlbumCollectionAction from '../actions';
import * as fromAlbumCollectionSelector from '../selectors';

describe('Albums Collection Selectors >', () => {
  let store: Store<fromAlbumCollectionReducer.AlbumFeatureState>;

  const album1: Album = {
    wrapperType: 'collection',
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 402060584,
    amgArtistId: 3644,
    artistName: 'The Beatles',
    collectionName: 'The Beatles Box Set',
    collectionCensoredName: 'The Beatles Box Set',
    artistViewUrl: 'https://itunes.apple.com/us/artist/the-beatles/136975?uo=4',
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
  };

  const album2: Album = {
    wrapperType: 'collection',
    collectionType: 'Album',
    artistId: 136975,
    collectionId: 400833614,
    amgArtistId: 3644,
    artistName: 'The Beatles',
    collectionName: 'The Beatles 1962-1966 (The Red Album)',
    collectionCensoredName: 'The Beatles 1962-1966 (The Red Album)',
    artistViewUrl: 'https://itunes.apple.com/us/artist/the-beatles/136975?uo=4',
    collectionViewUrl:
      'https://itunes.apple.com/us/album/the-beatles-1962-1966-the-red-album/400833614?uo=4',
    artworkUrl60:
      'http://is3.mzstatic.com/image/thumb/Music/v4/7f/ad/8c/7fad8cf2-c332-4794-be5b-aa65c073fece/source/60x60bb.jpg',
    artworkUrl100:
      'http://is3.mzstatic.com/image/thumb/Music/v4/7f/ad/8c/7fad8cf2-c332-4794-be5b-aa65c073fece/source/100x100bb.jpg',
    collectionPrice: 19.99,
    collectionExplicitness: 'notExplicit',
    trackCount: 27,
    copyright:
      '℗ Digital Remaster 2010 The copyright in this compilation is owned by EMI             Records Ltd',
    country: 'USA',
    currency: 'USD',
    releaseDate: '1973-04-02T08:00:00Z',
    primaryGenreName: 'Rock'
  };

  const albums: Album[] = [album1, album2];

  const entities = {
    [album1.collectionId]: albums[0],
    [album2.collectionId]: albums[1]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          album: combineReducers(
            fromAlbumCollectionReducer.albumCollectionReducer
          )
        })
      ]
    });

    store = TestBed.get(Store);
  });

  describe('selectAlbumCollection - initial state', () => {
    it('should return state of album collection store slice', () => {
      let result;

      store
        .select(fromAlbumCollectionSelector.getAlbumCollection)
        .subscribe(value => (result = value));

      expect(result).toEqual({
        entities: {},
        status: {
          loaded: false,
          loading: false
        }
      });

      store.dispatch(
        new fromAlbumCollectionAction.LoadAlbumCollectionSuccess(albums)
      );

      expect(result).toEqual({
        entities,
        status: {
          loaded: true,
          loading: false
        }
      });
    });
  });

  describe('getAlbumEntities', () => {
    it('should return albums as entities', () => {
      let result;

      store
        .select(fromAlbumCollectionSelector.getAlbumEntities)
        .subscribe(value => (result = value));

      expect(result).toEqual({});

      store.dispatch(new fromAlbumCollectionAction.LoadAlbumCollectionSuccess(albums));

      expect(result).toEqual(entities);
    });
  });

  describe('getSelectedAlbum', () => {
    it('should return selected album as an entity', () => {
      let result;
      let params;

      store.dispatch(new fromAlbumCollectionAction.LoadAlbumCollectionSuccess(albums));

      store.dispatch({
        type: 'ROUTER_NAVIGATION',
        payload: {
          routerState: {
            url: '/albums',
            queryParams: {},
            params: { collectionId: '400833614' }
          },
          event: {}
        }
      });

      store
        .select(fromRoot.getRouterState)
        .subscribe(routerState => (params = routerState.state.params));

      expect(params).toEqual({ collectionId: '400833614' });

      store
        .select(fromAlbumCollectionSelector.getSelectedAlbum)
        .subscribe(selectedAlbum => (result = selectedAlbum));

      expect(result).toEqual(entities[400833614]);
    });
  });

  describe('getAllAlbums', () => {
    it('should return albums as an array', () => {
      let result;

      store
        .select(fromAlbumCollectionSelector.getAllAlbums)
        .subscribe(value => (result = value));

      expect(result).toEqual([]);

      store.dispatch(new fromAlbumCollectionAction.LoadAlbumCollectionSuccess(albums));

      expect(result).toEqual(albums);
    });
  });

  describe('getAlbumsLoaded', () => {
    it('should return the albums loaded state', () => {
      let result;

      store
        .select(fromAlbumCollectionSelector.getAlbumsLoaded)
        .subscribe(value => (result = value));

      expect(result).toEqual(false);

      store.dispatch(new fromAlbumCollectionAction.LoadAlbumCollectionSuccess([]));

      expect(result).toEqual(true);
    });
  });

  describe('getAlbumsLoading > ', () => {
    it('should return the albums loading state', () => {
      let result;

      store
        .select(fromAlbumCollectionSelector.getAlbumsLoading)
        .subscribe(value => (result = value));

      expect(result).toEqual(false);

      store.dispatch(new fromAlbumCollectionAction.LoadAlbumCollection());

      expect(result).toEqual(true);
    });
  });
});
 */