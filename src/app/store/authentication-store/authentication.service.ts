import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import firebase from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './models/user.model';
import { first, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AuthStoreState } from '.';
import { authLogin, authSuccess } from './authentication.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authInfo$: BehaviorSubject<User> = new BehaviorSubject<User>(new User(""));
  authenticated$: Observable<boolean>

  constructor(public auth: AngularFireAuth, private store: Store<AuthStoreState.State>) {
    
  }

  login(email: string, password: string) {
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
      return this.auth.signInWithEmailAndPassword(email, password);
    })
  }

  authenticated() {
    return this.auth.authState.pipe(first()).toPromise().then(user => {
      this.store.dispatch(authSuccess({ mail: user?.email || "" }))

      return user;
    })
  }

  logout() {
    return this.auth.signOut();
  }
}
