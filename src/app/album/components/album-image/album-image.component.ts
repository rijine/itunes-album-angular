import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'album-image',
  templateUrl: './album-image.component.html',
  styleUrls: ['./album-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumImageComponent implements OnInit {
  @Input() album;
  constructor() {
  }

  /* public get albumView() {
    return this.album.map(albums => Array.isArray(albums)? albums[0]: null);
  } */

  ngOnInit() {
  }

}
