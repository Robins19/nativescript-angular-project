import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamService } from '../team.service';
import { HttpClientModule } from '@angular/common/http';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { PrivateModule } from '/home/robins/Desktop/native-project/src/app/private/private.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule
// tslint:disable-next-line: no-trailing-whitespace
    
  ],
  providers: [TeamService]
})
export class PublicModule { }
