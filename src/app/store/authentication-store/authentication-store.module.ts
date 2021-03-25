import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './authentication.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from './authentication.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('authentication', authReducer),
    EffectsModule.forFeature([AuthenticationEffects])
  ],
  providers: [AuthenticationEffects]
})
export class AuthenticationStoreModule { }
