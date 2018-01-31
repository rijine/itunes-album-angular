import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'trackTime' })
export class TrackTimePipe implements PipeTransform {
  transform(value): string {
    return (Math.round((value/600)) / 100 ) + ' mins';
  }
}
