import { AlbumsGuard } from './albums.guard';
import { AlbumExistsGuard } from './album-exists.guard';

export const guards: any[] = [AlbumsGuard, AlbumExistsGuard];

export * from './albums.guard';
export * from './album-details.guard';
export * from './album-exists.guard';
