import { Component, OnInit } from '@angular/core';
import { TeamService } from '/home/robins/Desktop/native-project/src/app/team.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  teams = [];
  teamArray: FormArray = this.fb.array([]);
  parentFormGroup: FormGroup = this.fb.group({
    teamArray: this.fb.array([])
  });
  totalAmount: any;
  dialog: any;

  constructor(public teamService: TeamService,
    public router: Router,
    private fb: FormBuilder) { }

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
}
