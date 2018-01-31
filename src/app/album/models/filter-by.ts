export class FilterBy {
  filterOn: string;
  filter: string;
  constructor({filter = '', filterOn = ''}) {
    this.filter = filter;
    this.filterOn = filterOn;
  }
}