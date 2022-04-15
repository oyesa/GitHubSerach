import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  username: string;
  profile: any[];
  repos: any[];

  constructor(private profileservice: ProfileService) { 
    this.profileservice.getdata().subscribe((profile: any[])=>{
      console.log(profile);
      this.profile = profile;
    });
    this.profileservice.getdata().subscribe((repos : any[])=>{
      console.log(repos);
      this.repos = repos;
    });
  }

  findProfile(){
    this.profileservice.updateProfile(this.username);
    this.profileservice.getdata().subscribe((profile: any[]) => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileservice.getProfileRepos().subscribe((repos: any[]) => {
      console.log(repos);
      this.repos = repos;
    });

  }

  ngOnInit(): void {
  }

}
