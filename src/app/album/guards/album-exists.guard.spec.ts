import { TestBed, async, inject } from '@angular/core/testing';

import { AlbumExistsGuard } from './album-exists.guard';

describe('AlbumExistsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumExistsGuard]
    });
  });

  it('should ...', inject([AlbumExistsGuard], (guard: AlbumExistsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
