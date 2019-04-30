import { Component, OnInit } from '@angular/core';
import { TeamService } from '/home/robins/Desktop/native-project/src/app/team.service';
import { FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('saral@jungleworks.com', [
    Validators.required,
    Validators.email,
  ]);
  password = new FormControl('123456', [Validators.required]);
  constructor(public teamService: TeamService, private router: Router) { }
  login() {
    if (this.email.valid && this.password.valid) {
      const data = {email: this.email.value, password: this.password.value};
      console.log(data);
      this.teamService.login(data).subscribe(response => {
          console.log(response);
        if (response && response.status == 200) {
          console.log(response.body.access_token);
          localStorage.setItem('accessToken', response.body.access_token);
          this.router.navigate(['teams-revenue']);
        }

      });
    }

  }

  ngOnInit() {
  }

}
