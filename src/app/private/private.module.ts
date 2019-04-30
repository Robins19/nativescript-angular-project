import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from '../team.service';
import { ReactiveFormsModule } from '@angular/forms';

import { PrivateRoutingModule } from './private-routing.module';
import {TeamsComponent } from './teams-revenue/teams-revenue.component';
import { AddNewRecordComponent } from './add-new-record/add-new-record.component';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [TeamsComponent, HeaderComponent,FooterComponent, AddNewRecordComponent, EditRecordComponent, DeleteRecordComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TeamService]
})
export class PrivateModule { }
