import { TestBed, async, inject } from '@angular/core/testing';

import { AlbumDetailsGuard } from './album-details.guard';

describe('AlbumDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumDetailsGuard]
    });
  });

  it('should ...', inject([AlbumDetailsGuard], (guard: AlbumDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
