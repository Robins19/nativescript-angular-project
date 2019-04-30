import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
id: number;
amount: number;
name: String;
  getTeams(): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'teams/get', { 'access_token': accessToken });
  }

  login(data): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'user/login', data);
  }
  addTeam(data): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'teams/add',
    Object.assign({ 'access_token': accessToken }, data));
    }
  logout(): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'user/logout', { 'access_token': accessToken });
  }

  // EditTeam(data): Observable<any> {
  //   const accessToken = localStorage.getItem('accessToken');
  //   return this.http.post<any>(environment.API_URL + 'teams/edit',
  //     Object.assign({ 'access_token': accessToken }, data));
  // }

  updateTeam(data): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'teams/edit',
      Object.assign({ 'access_token': accessToken }, data));
  }

  deleteTeam(data): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'teams/delete',
      Object.assign({ 'access_token': accessToken }, data));
  }

  constructor(private http: HttpClient) {

  }
}
