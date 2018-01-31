/**
 * @orderBy: the field you want use to decide as sort factor
 * @direction: 1 stands ascending and -1 stands for descending order
 */
export class OrderBy {
  orderBy: string;
  displayName: string;
  direction: string;
  constructor({ displayName = '', orderBy = '', direction = 'ASC' }) {
    this.orderBy = orderBy;
    this.displayName = displayName;
    this.direction = direction;
  }
}
