import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { Album } from '../../models/index';

@Component({
  selector: 'album-image',
  templateUrl: './album-image.component.html',
  styleUrls: ['./album-image.component.scss']
})
export class AlbumImageComponent implements OnInit {
  @Input() album: Album;
  constructor() {}

  ngOnInit() {}
}
