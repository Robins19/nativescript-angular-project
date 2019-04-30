import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { PrivateRoutingModule } from './private-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TeamsRevenueComponent } from './teams-revenue/teams-revenue.component';
import { AddNewRecordComponent } from './add-new-record/add-new-record.component';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';

@NgModule({
  declarations: [TeamsRevenueComponent, AddNewRecordComponent, EditRecordComponent, DeleteRecordComponent],
  imports: [
    PrivateRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PrivateModule { }
