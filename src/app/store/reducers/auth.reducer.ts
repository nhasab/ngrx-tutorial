import { Action } from '@ngrx/store';
import { AuthActionTypes, SetAuths, AuthActions } from '../actions/auth.actions';


export interface State {
 userName?: string;
}

export const initialState: State = {
  userName:null
};

export function reducer(state = initialState, action: AuthActions): State {
  
  switch (action.type) {
    case AuthActionTypes.SetAuths:
      return handleSetAuth(state,action);
    default:
      return state;
  }
}
function handleSetAuth(state: State, action: SetAuths) {
  return {...state, userName: action.payloads};
}
