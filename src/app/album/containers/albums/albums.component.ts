import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

//import * as albumStore from '../../store';
import { UpdateAlbumsSortOrder, UpdateAlbumsFilter } from '../../store/actions';
import { AlbumsState } from '../../store/reducers/album.reducer';
import * as albumSelector from '../../store/selectors';
import * as fromRoot from '../../../store';

import { AlbumService } from '../../services';
import { Album, OrderBy, FilterBy } from '../../models';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums$: Observable<Album[]>;
  sortOrder$: Observable<OrderBy>;
  displayOrder = {
    collectionName: 'Album',
    artistName: 'Artist'
  };
  currentSortOrder: OrderBy;
  search = '';
  constructor(private store: Store<AlbumsState>, private appStore: Store<fromRoot.ApplicationState>) {}

  ngOnInit() {
    this.albums$ = this.store.select(albumSelector.getAlbumsByFilterAndSort);
    /* this.albums$.subscribe(
      (x) => console.log(x)
    ); */
    this.sortOrder$ = this.store.select(albumSelector.getSortParameters);

    this.sortOrder$.subscribe(state => {
      this.currentSortOrder = state;
    });
  }

  onViewDetails($event) {
    this.appStore.dispatch(new fromRoot.Go({path: ['/albums', $event.collectionId]}));
  }

  selectOrderBy(order) {
    const orderBy: OrderBy = Object.assign({}, this.currentSortOrder);
    orderBy.displayName = this.displayOrder[order];
    orderBy.orderBy = order;

    this.store.dispatch(new UpdateAlbumsSortOrder({orderBy}));
    //this.onSearchChange();
    return false;
  }

  changeSortOrder() {
    const orderBy: OrderBy = Object.assign({}, this.currentSortOrder);
    orderBy.direction = orderBy.direction === 'ASC' ? 'DESC' : 'ASC';
    this.store.dispatch(new UpdateAlbumsSortOrder({orderBy}));
    //this.onSearchChange();
  }

  onSearchChange() {
    const filterBy = new FilterBy({
      filter: this.search,
      filterOn: 'collectionName'
    });
    this.store.dispatch(new UpdateAlbumsFilter({filterBy}));
  }
}
