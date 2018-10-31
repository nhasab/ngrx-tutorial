import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {AuthActionTypes, SetAuths} from "../actions/auth.actions";
import {map, switchMap} from "rxjs/operators";

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private http: HttpClient) {}
  @Effect()
  loadAuths$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LoadAuths),
    switchMap(() => {
      return this.http.get<string>('login').pipe(
        map((userName) => {
          return new SetAuths(userName);
        })
      )
    })
  )
}
