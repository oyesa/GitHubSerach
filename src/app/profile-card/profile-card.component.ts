import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  username!: string;
  profile!: any[];
  repos!: any[];

  constructor(private profileservice: ProfileService) { 
    this.profileservice.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileservice.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    });
  }

  findProfile(){
    this.profileservice.updateProfile(this.username);
    this.profileservice.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileservice.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });

  }

  ngOnInit(): void {
  }

}
