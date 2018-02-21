import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { AlbumService } from './album.service';

describe('AlbumService', () => {
  let service: AlbumService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlbumService]
    });
    service = TestBed.get(AlbumService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  /* it(
    'should be created',
    inject([AlbumService], (service: AlbumService) => {
      expect(service).toBeTruthy();
    })
  ); */

  it('should retrieve albums from the API via JSONP', () => {
    const albumsMock = [
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

    service.getAlbums().subscribe(albums => {
      expect(albums.length).toBe(1);
      expect(albums).toEqual(albumsMock);
    });

    const request = httpMock.expectOne(`https://itunes.apple.com/search`);
    expect(request.request.method).toBe('JSONP');
    request.flush(albumsMock);
  });
});
