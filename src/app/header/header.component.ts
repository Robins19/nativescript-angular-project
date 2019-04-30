import { Component, OnInit } from '@angular/core';
import { TeamService } from '/home/robins/Desktop/native-project/src/app/team.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public teamService: TeamService,
    public router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
  }

  logout() {
    this.teamService.logout().subscribe(response => {
      localStorage.removeItem('accessToken');
      this.router.navigate(['login']);
    });
  }
  AddTeam() {
    this.router.navigate(['add-new-record']);
}
}
