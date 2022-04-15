import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private clientid = '';
  private clientsecret = '';

  constructor(private http: HttpClient) { 
    console.log('Okay');
    this.username = 'Oyesa';
  }

  getdata(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }

  getProfileRepo(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }

  updateProfile(username: string){
    this.username =  this.username;
  }
}
