import { createSelector, MemoizedSelector } from "@ngrx/store"
import {
  AuthStoreSelectors
} from "./authentication-store"

export const selectIsLoading: MemoizedSelector<object, boolean> = 
  createSelector(AuthStoreSelectors.selectAuthAuthenticating, (authenticating: boolean) => {
    return authenticating;
  })

