import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Repository } from './repository';



@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  profile: User;
  repo: Repository;


  constructor(private http: HttpClient) { 
    this.profile = new User('', '', '', '', '', 0, 0);
    this.repo = new Repository('', '', '', new Date());
  }

  getProfileInfo(username:string){

    interface ApiResponse {
      avatar_url: string;
      name: string;
      login: string;
      bio: string;
      html_url: string;
      followers:number;
      following:number;
    }

    let profileUrl = 'https://api.github.com/users/'+username+'?client_id='+environment.clientid + "&client_secret="+environment.clientsecret;

    let promise = new Promise<void>((resolve, reject)=>{
      this.http.get<ApiResponse>(profileUrl).toPromise().then
      (response =>{
        this.profile = response;

        resolve()
      },
      error=>{
        this.profile.name = "Error! There's no profile with that name"

        reject(error)
      })
    })
    return promise;

  }


  getProfileRepos(username:string){
    interface ApiResponse {
      name: string;
      html_url: string;
      description:string;
      dateCreated: Date;
    }

    let repoUrl = 'https://api.github.com/users/'+username+'/repos?order=created&sort=asc?client_id='+environment.clientid + '&client_secret='+environment.clientsecret;
    let promise = new Promise<void>((resolve,reject) =>{
      this.http.get<ApiResponse>(repoUrl).toPromise().then
      (response => {
          this.repo = response;
          console.log(this.repo);
        resolve()
      },
      error=>{
        this.repo.name = "No matching repositories found"

        reject(error)
        })
      })
      return promise;
  }

  // getProfileInfo(){
  //   return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  // }

  // getProfileRepos(){
  //   return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  // }

  // updateProfile(username: string){
  //   this.username =  this.username;
  // }
}
