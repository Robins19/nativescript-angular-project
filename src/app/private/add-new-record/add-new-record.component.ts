import { Router } from '@angular/router';
import { TeamService } from '/home/robins/Desktop/native-project/src/app/team.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-new-record',
  templateUrl: './add-new-record.component.html',
  styleUrls: ['./add-new-record.component.css']
})
export class AddNewRecordComponent implements OnInit {

teams = [];
addForm: FormGroup;
accessToken: String;
submitted = false;
forms: FormGroup;

constructor(private formBuilder: FormBuilder, private teamService: TeamService, public router: Router) { }

ngOnInit() {

this.forms = this.formBuilder.group({
name: ['', Validators.required],
revenue: ['', Validators.required],
});
this.accessToken = localStorage.getItem('access_token');
}


addTeam(forms) {
this.teamService. addTeam(forms).subscribe(response => {
// console.log(response);
if (this.forms.controls.name.valid && this.forms.controls.revenue.valid) {
// tslint:disable-next-line:no-shadowed-variable
const forms = {team_name: this.forms.controls.name.value, amount: this.forms.controls.revenue.value};
console.log(forms);
// tslint:disable-next-line:no-shadowed-variable
this.teamService.addTeam(forms).subscribe(response => {
console.log(response);
if (response && response.status === 401) {

}
});
}


});

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


}
