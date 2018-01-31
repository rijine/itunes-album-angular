import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackItemComponent implements OnInit {
  @Input() track;
  constructor() { }

  ngOnInit() {
  }

}
