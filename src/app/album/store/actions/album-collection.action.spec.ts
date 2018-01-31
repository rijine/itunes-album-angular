import * as fromAlbumCollection from './album-collection.action';
import { Album } from '../../models';

describe('Album Collection Actions', () => {
  describe('LoadAlbum Actions', () => {
    describe('LoadAlbum', () => {
      it('should create an action', () => {
        const action = new fromAlbumCollection.LoadAlbumCollection();

        expect({ ...action }).toEqual({
          type: fromAlbumCollection.AlbumCollectionActionTypes.LoadAlbums
        });
      });
    });

    describe('LoadAlbumsFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromAlbumCollection.LoadAlbumCollectionFail(payload);

        expect({ ...action }).toEqual({
          type: fromAlbumCollection.AlbumCollectionActionTypes.LoadAlbumsFail,
          payload
        });
      });
    });

    describe('LoadAlbumsSuccess', () => {
      it('should create an action', () => {
        const payload: Album[] = [
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
        const action = new fromAlbumCollection.LoadAlbumCollectionSuccess(
          payload
        );

        expect({ ...action }).toEqual({
          type:
            fromAlbumCollection.AlbumCollectionActionTypes.LoadAlbumsSuccess,
          payload
        });
      });
    });
  });

  describe('LoadSingleAlbum Actions', () => {
    describe('LoadSingleAlbum', () => {
      it('should create an action', () => {
        const payload: number = 1;
        const action = new fromAlbumCollection.LoadSingleAlbum(payload);

        expect({ ...action }).toEqual({
          type: fromAlbumCollection.AlbumCollectionActionTypes.LoadSingleAlbum,
          payload
        });
      });
    });

    describe('LoadSingleAlbumsFail', () => {
      it('should create an action', () => {
        const payload: any = { message: 'Load Error' };
        const action = new fromAlbumCollection.LoadSingleAlbumFail(payload);

        expect({ ...action }).toEqual({
          type:
            fromAlbumCollection.AlbumCollectionActionTypes.LoadSingleAlbumFail,
          payload
        });
      });
    });

    describe('LoadSingleAlbumsSuccess', () => {
      it('should create an action', () => {
        const payload: Album[] = [{
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
        }];

        const action = new fromAlbumCollection.LoadSingleAlbumSuccess(payload);

        expect({ ...action }).toEqual({
          type:
            fromAlbumCollection.AlbumCollectionActionTypes
              .LoadSingleAlbumSuccess,
          payload
        });
      });
    });
  });
});
