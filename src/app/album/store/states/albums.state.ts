import { EntityState } from '@ngrx/entity';
import { Album } from '../../models';

export interface AlbumsState extends EntityState<Album> {
  selectedAlbumId: string | null;
}
