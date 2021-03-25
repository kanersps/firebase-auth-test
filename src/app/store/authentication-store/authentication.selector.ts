import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import { State } from "./authentication.state";

const getError = (state: State) => state.error;
const getAuthenticating = (state: State) => state.authenticating;
const getAuthenticated = (state: State) => state.authenticated;
const getMail = (state: State) => state.email;

export const selectAuthState: MemoizedSelector<object, State> = createFeatureSelector<State>('authentication');

export const selectAuthError: MemoizedSelector<object, any> = createSelector(
  selectAuthState,
  getError
)

export const selectAuthAuthenticating: MemoizedSelector<object, any> = createSelector(
  selectAuthState,
  getAuthenticating
)

export const selectAuthAuthenticated: MemoizedSelector<object, any> = createSelector(
  selectAuthState,
  getAuthenticated
)

export const selectAuthMail: MemoizedSelector<object, any> = createSelector(
  selectAuthState,
  getMail
)