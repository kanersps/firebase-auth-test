import { createAction, props, union } from "@ngrx/store";

export enum ActionTypes {
  AUTH_LOGIN = '[Auth] Login',
  AUTH_SUCCESS = '[Auth] Login Success',
  AUTH_FAILURE = '[Auth] Login Failure',
}

export const authLogin = createAction(
  ActionTypes.AUTH_LOGIN,
  props<{ email: string, password: string}>()
)

export const authSuccess = createAction(
  ActionTypes.AUTH_SUCCESS,
  props<{ mail: string }>()
)

export const authFailure = createAction(
  ActionTypes.AUTH_FAILURE,
  props<{ error: string }>()
)

const all = union({
  authLogin,
  authSuccess,
  authFailure
})

export type Actions = typeof all;