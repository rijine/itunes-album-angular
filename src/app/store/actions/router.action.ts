import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum NavigateTypes {
  GO = '[Router] Go',
  BACK = '[Router] Back',
  FORWARD = '[Router] Forward'
}

export class Go implements Action {
  readonly type = NavigateTypes.GO;
  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class Back implements Action {
  readonly type = NavigateTypes.BACK;
}

export class Forward implements Action {
  readonly type = NavigateTypes.FORWARD;
}

export type RouterAction = Go | Forward | Back;
