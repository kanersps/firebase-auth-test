import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationStoreModule } from './authentication-store/authentication-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class AppStoreModule { }
