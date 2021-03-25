import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ActionTypes, authFailure, authSuccess } from "./authentication.actions";
import { map, mergeMap, tap } from "rxjs/operators";
import { AuthStoreActions } from ".";
import { AuthenticationService } from "./authentication.service";
import firebase from 'firebase';


@Injectable()
export class AuthenticationEffects {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.AUTH_LOGIN),
    mergeMap(action => this.authService.login(action.email, action.password)
    .then(resp => {
      return authSuccess({ mail: resp.user?.email || "" });
    }).catch(err => {
      return authFailure({ error: err.message });      
    }))
  ))

  constructor(private actions$: Actions<AuthStoreActions.Actions>, private authService: AuthenticationService) {}
}