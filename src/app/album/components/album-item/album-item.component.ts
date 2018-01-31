import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumItemComponent implements OnInit {
  @Input() album;
  @Output() notify: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  gotoDetails() {
    this.notify.emit(this.album);
    return false;
  }
}
