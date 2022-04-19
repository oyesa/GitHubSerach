import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProfileService } from '../profile.service';
import { NgModule } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(private profileService: ProfileService) { 
    // findProfile(){
    //   this.profileService.updateProfile(this.username);
    //   this.profileService.getProfileInfo().subscribe(profile => {
    //     console.log(profile);
    //     this.profile = profile;
    //   });
    //   this.profileService.getProfileRepos().subscribe(repos => {
    //     console.log(repos);
    //     this.repos = repos;
    //   });
  
    // }
  }

  ngOnInit(): void {
  }

}


