
import { TeamService } from '/home/robins/Desktop/native-project/src/app/team.service';
import { Router, RouteConfigLoadEnd } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {
  teams = [];
  addForm: FormGroup;
  accessToken: String;
  submitted = false;
  forms: FormGroup;
//  id: number;
//  amount: number;
//  name: String;

  constructor(private formBuilder: FormBuilder, public teamService: TeamService, public router: Router) { }


  updateTeam(forms) {
      console.log(forms);
      const data = {
        team_id: this.teamService.id,
        team_name: this.forms.value.name ,
        amount:  this.forms.value.revenue
      };
      console.log(data);
      this. teamService.updateTeam(data).subscribe(response => {
        console.log(response);
        if (response && response.status === 200) {

          this.router.navigate(['teams-revenue']);
        }
      });

// tslint:disable-next-line: comment-format
    //console.log(forms);
  }

  cancel(index, team) {
    // console.log(index, team);
    team.controls.name.reset(this.teams[index].team_name);
    team.controls.amount.reset(this.teams[index].amount);
  }

Back() {
  this.router.navigate(['teams-revenue']);
}
logout() {
  this.teamService.logout().subscribe(response => {
    localStorage.removeItem('accessToken');
    this.router.navigate(['login']);
  });
}


  ngOnInit() {
    this.forms = this.formBuilder.group({
      name: [this.teamService.name, Validators.required],
      revenue: [this.teamService.amount, Validators.required],
      });
    // this.id = this.teamService.id;
    // this.amount = this.teamService.amount;
    // this.name = this.teamService.name;
    // console.log('id consoled in edit component' + this.id);
    // console.log('id consoled in edit component' + this.amount);
    // console.log('id consoled in edit component' + this.name);

  }

}
