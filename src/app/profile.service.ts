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
  repoData = []


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

// Getting  repo properties from Api

  getProfileRepos(username:string){
    interface ApiResponse {
      name: string;
      html_url: string;
      description:string;
      created_at: Date;
    }

    let repoUrl = 'https://api.github.com/users/'+username+'/repos?order=created&sort=asc?client_id='+environment.clientid + '&client_secret='+environment.clientsecret;
    let promise = new Promise<void>((resolve,reject) =>{
      this.http.get<any>(repoUrl).toPromise().then
      (response => {
        
        // Loop through repos
        this.repoData.length = 0 
        for(let i = 0; i < response.length; i++) {
          this.repo = new Repository(response[i].name, response[i].html_url, response[i].description, response[i].created_at);
          this.repoData.push(this.repo);
        }

        resolve()
      },
      error=>{
        this.repo.name = "No matching repositories found"

        reject(error)
        })
      })
      return promise;
  }
}
