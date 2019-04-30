import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    PublicRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PublicModule { }
