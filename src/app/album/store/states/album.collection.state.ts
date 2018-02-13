import { Album, Status, OrderBy, FilterBy } from '../../models';

export interface AlbumCollectionState {
  entities: { [id: number]: Album };
  details: { [id: number]: Album[] };
  status: Status;
  orderBy: OrderBy;
  filterBy: FilterBy;
  count: number;
}
