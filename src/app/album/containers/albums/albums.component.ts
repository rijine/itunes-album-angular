import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as albumStore from '../../store';
import * as albumAction from '../../store/actions';
import * as albumSelector from '../../store/selectors';
import * as fromRoot from '../../../store';

import { AlbumService } from '../../services';
import { Album, OrderBy, FilterBy } from '../../models';
import { AlbumFeatureState } from '../../store/states';

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
  constructor(private store: Store<AlbumFeatureState>, private appStore: Store<fromRoot.ApplicationState>) {}

  ngOnInit() {
    this.albums$ = this.store.select(albumSelector.getAlbumsByFilterAndSort);
    //.subscribe((x) => console.log(x));
    this.sortOrder$ = this.store.select(albumSelector.getSortParameters);

    this.sortOrder$.subscribe(state => {
      this.currentSortOrder = state;
    });
  }

  onViewDetails($event) {
    this.appStore.dispatch(new fromRoot.Go({path: ['/albums', $event.collectionId]}));
  }

  selectOrderBy(order) {
    const sortData: OrderBy = Object.assign({}, this.currentSortOrder);
    sortData.displayName = this.displayOrder[order];
    sortData.orderBy = order;

    this.store.dispatch(new albumAction.UpdateAlbumsSortOrder(sortData));
    this.onSearchChange();
    return false;
  }

  changeSortOrder() {
    const sortData: OrderBy = Object.assign({}, this.currentSortOrder);
    sortData.direction = sortData.direction === 'ASC' ? 'DESC' : 'ASC';
    this.store.dispatch(new albumAction.UpdateAlbumsSortOrder(sortData));
    this.onSearchChange();
  }

  onSearchChange() {
    const filter = new FilterBy({
      filter: this.search,
      filterOn: 'collectionName'
    });
    this.store.dispatch(new albumAction.UpdateAlbumsFilter(filter));
  }
}
