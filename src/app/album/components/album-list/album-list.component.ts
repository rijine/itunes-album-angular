import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('listAnimate', [
      transition('void => *', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate(1000)
      ])
    ])
  ]
})
export class AlbumListComponent implements OnInit {
  @Input() albums;
  @Output() notify: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onViewDetails($event) {
    this.notify.emit($event);
  }

}
