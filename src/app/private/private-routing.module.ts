import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewRecordComponent} from './add-new-record/add-new-record.component';
import { EditRecordComponent} from './edit-record/edit-record.component';
import {  TeamsComponent} from './teams-revenue/teams-revenue.component';





const routes: Routes = [
  {path: 'add-new-record', component: AddNewRecordComponent},
  {path: 'edit-record', component:  EditRecordComponent},
  {path: 'teams-revenue', component:  TeamsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
