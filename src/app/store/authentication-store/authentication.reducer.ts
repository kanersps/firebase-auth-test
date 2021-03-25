import { Action, createReducer, on } from "@ngrx/store";
import { authFailure, authLogin, authSuccess } from "./authentication.actions";
import { initialState, State } from "./authentication.state";

const _reducer = createReducer(
  initialState,
  on(authLogin, (state) => ({...state, authenticating: true, error: ""})),
  on(authSuccess, (state, { mail }) => ({...state, authenticating: false, authenticated: true, email: mail, error: ""})),
  on(authFailure, (state, { error }) => ({...state, authenticating: false, error })),
)

export function authReducer(state: State, props: Action) {
  return _reducer(state, props)
}