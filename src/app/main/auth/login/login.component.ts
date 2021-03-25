import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStoreState, AuthStoreActions, AuthStoreSelectors } from 'src/app/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuthenticating$: Observable<boolean>;
  error$: Observable<string>;
  authenticated$: Observable<boolean>;
  email$: Observable<string>;

  constructor(private store$: Store<AppStoreState.State>) { }

  login = () => {
    this.store$.dispatch(AuthStoreActions.authLogin({ email: "test@test.com", password: "testtt" }))
  }

  ngOnInit(): void {
    this.isAuthenticating$ = this.store$.select(
      AuthStoreSelectors.selectAuthAuthenticating
    )

    this.error$ = this.store$.select(
      AuthStoreSelectors.selectAuthError
    )

    this.authenticated$ = this.store$.select(
      AuthStoreSelectors.selectAuthAuthenticated
    )

    this.email$ = this.store$.select(
      AuthStoreSelectors.selectAuthMail
    )
  }

}
