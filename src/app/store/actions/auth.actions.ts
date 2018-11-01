import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LoadAuths = '[Auth] Load Auths',
  SetAuths = '[Auth] Set Auths'
}
export interface SetAuthsPayload {
  userName:string;
  friendlyName: string
}

export class LoadAuths implements Action {
  readonly type = AuthActionTypes.LoadAuths;
}

export class SetAuths implements Action {
  readonly type = AuthActionTypes.SetAuths;
  constructor(public payloads: SetAuthsPayload) {
    
  }
}

export type AuthActions = LoadAuths | SetAuths;
