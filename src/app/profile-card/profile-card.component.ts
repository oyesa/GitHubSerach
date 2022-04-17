import { Component, OnInit } from '@angular/core';
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
  username: string;
  profile: any[];
  repos: any[];


  constructor(private profileservice: ProfileService, http:HttpClient) { 
    this.profileservice.getProfileInfo().subscribe((profile: any[])=>{
      console.log(profile);
      this.profile = profile;
    });
    this.profileservice.getProfileRepos().subscribe((repos:any[]) =>{
      console.log(repos);
      this.repos = repos;
    });
  }

  findProfile(){
    this.profileservice.updateProfile(this.username);
    this.profileservice.getProfileInfo().subscribe((profile:any[]) => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileservice.getProfileRepos().subscribe((repos:any[]) => {
      console.log(repos);
      this.repos = repos;
    });

  }

  // function findProfile() {
  //   throw new Error('Function not implemented.');
  // }

  ngOnInit(): void {
    // interface ApiResponse{
    //  name:string, 
    //  login:string, 
    //  bio:string,
    //  avatar_url:any[],
    //  html_url:any[],
    //  public_repo:any[]
    // }
  }

}
