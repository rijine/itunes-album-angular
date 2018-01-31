import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackListComponent implements OnInit {
  @Input() tracks;
  constructor() { }

  ngOnInit() {
  }

}
