import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repos: any;
  profile: any;

  constructor( private profileServce: ProfileService) { 
    this.profileServce = profileServce;
  }

  getProfileRepos(){}

  ngOnInit(): void {
    this.profileServce.getProfileRepos().subscribe((repos:any[]) =>{
      console.log(repos);
      this.repos = repos;
    });
  }

}
