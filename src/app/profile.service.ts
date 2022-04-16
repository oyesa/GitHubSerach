import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private clientid = 'f280eb675b1893d0bdbb';
  private clientsecret = '1c930a6fb1a5746ba3bf45a9052c303e451f347e';

  constructor(private http: HttpClient) { 
    console.log('service ready');
    this.username = 'Oyesa';
  }

  getdata(){
    return this.http.get("https://api.github.com/users" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }

  updateProfile(username: string){
    this.username =  this.username;
  }
}
