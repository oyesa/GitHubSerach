import { Component, OnInit, Output, EventEmitter, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileService } from '../profile.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Repository } from '../repository';




@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  profile: User;
  repo:Repository;
  repos: any[];
 

  constructor(public profileservice: ProfileService){}

  findProfile(username:string){
    this.profileservice.getProfileInfo(username).then((success)=>{
      this.profile = this.profileservice.profile;
    },
    (error)=>{
      console.log(error)
    });

    this.profileservice.getProfileRepos(username).then((success)=>{
      this.repo = this.profileservice.repo;
    },
    (error)=>{
      console.log(error)
    });
    

  }

  // constructor(private profileservice: ProfileService, http:HttpClient) { 
  //   this.profileservice.getProfileInfo().subscribe((profile: any[])=>{
  //     console.log(profile);
  //     this.profile = profile;
  //   });
  //   this.profileservice.getProfileRepos().subscribe((repos:any[]) =>{
  //     console.log(repos);
  //     this.repos = repos;
  //   });
  // }

  // findProfile(){
  //   this.profileservice.updateProfile(this.username);
  //   this.profileservice.getProfileInfo().subscribe((profile:any[]) => {
  //     console.log(profile);
  //     this.profile = profile;
  //   });
  //   this.profileservice.getProfileRepos().subscribe((repos:any[]) => {
  //     console.log(repos);
  //     this.repos = repos;
  //   });

  // }

  ngOnInit(): void {
    this.findProfile('oyesa');
  }

}
