import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError, take, first } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Album, AlbumsResponse } from '../models';
import { mergeMap } from 'rxjs/operators/mergeMap';

@Injectable()
export class AlbumService {
  readonly callbackParam = '&callback=JSONP_CALLBACK';
  readonly url = `https://itunes.apple.com/search?term=Beatles&entity=album${this.callbackParam}`;
  readonly lookupUrl = `https://itunes.apple.com/lookup?id=`;
  readonly trackUrl = 'https://itunes.apple.com/lookup?id=1053882093&entity=song';

  constructor(private http: HttpClient) {
  }

  getAlbums(): Observable<Album[]> {
    return this.http.jsonp<AlbumsResponse>(this.url, 'JSONP_CALLBACK')
      .pipe(
        map((res: AlbumsResponse) => res.results as Album[] ),
        catchError(error => of([]))
      );
  }

  getAlbum(collectionId: number): Observable<Album> {
    return this.http.jsonp<AlbumsResponse>(this.lookupUrl + collectionId + this.callbackParam , 'JSONP_CALLBACK')
      .pipe(
        mergeMap((res: AlbumsResponse) => res.results),
        first(),
        catchError(error => of(null))
      );
  }

}
