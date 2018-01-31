/**
 * class to store status of api calls
 */
export class Status {
  loading: boolean;
  loaded: boolean;
  constructor({loading = false, loaded = false}) {
    this.loading = loading;
    this.loaded = loaded;
  }
}
