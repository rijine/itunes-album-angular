import { TestBed, async, inject } from '@angular/core/testing';

import { AlbumsGuard } from './albums.guard';

describe('AlbumsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumsGuard]
    });
  });

  /* it('should ...', inject([AlbumsGuard], (guard: AlbumsGuard) => {
    expect(guard).toBeTruthy();
  })); */
});
