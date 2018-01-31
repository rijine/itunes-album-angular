import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
  state
} from '@angular/animations';

@Component({
  selector: 'album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(179.9deg)'
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)'
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
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
