import { Component, ViewChild, OnInit } from '@angular/core';
import { TeamService } from '/home/robins/Desktop/native-project/src/app/team.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-teams',
  templateUrl: './teams-revenue.component.html',
  styleUrls: ['./teams-revenue.component.css']
})
export class TeamsComponent implements OnInit {
  teams = [];
  teamArray: FormArray = this.fb.array([]);
  parentFormGroup: FormGroup = this.fb.group({
    teamArray: this.fb.array([])
  });
  totalAmount: any;
  dialog: any;
  data: any;
  index: any;

  constructor(public teamService: TeamService,
    public router: Router,
    private fb: FormBuilder) {

  }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teamService.getTeams().subscribe(response => {
       console.log(response);
// tslint:disable-next-line: triple-equals
      if (response && response.status == 200) {
        this.teams = response.data;
        this.totalAmount = this.teams.reduce((previous, current) => previous + current.amount, this.teams[0].amount);
        const teamArray = this.teams.map(team => this.fb.group({
          name: this.fb.control(team.team_name, [Validators.required]),
          amount: this.fb.control(team.amount, [Validators.required, Validators.pattern('[0-9]*')])
        }));
        this.teamArray = this.fb.array(teamArray);
        this.parentFormGroup = this.fb.group({
          teamArray: this.teamArray
        });
      } else if (response && response.status === 401) {
        this.logout();
      }

    });
  }

  logout() {
    this.teamService.logout().subscribe(response => {
      localStorage.removeItem('accessToken');
      this.router.navigate(['login']);
    });
  }
  Edit(index, team) {

        this.teamService.id = this.teams[index].team_id;
        this.teamService.name = team.value.name;
        this.teamService.amount = team.value.amount;


      console.log('catched data consoled');
      console.log(this.teamService.id);

    this.router.navigate(['edit-record']);
  }
  AddTeam() {
      this.router.navigate(['add-new-record']);
  }

  delete(index, team) {


      this.teamService.id =  this.teams[index].team_id;
      const data = {
        team_id: this.teamService.id,
      };

      this.teamService.deleteTeam(data).subscribe(response => {
        console.log(response);
        if (response && response.status === 200) {
          this.getTeams();
        }
      });
    }


}

