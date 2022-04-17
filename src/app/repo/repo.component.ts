import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { ProfileService } from '../profile.service';
import { Repository } from '../repository';
import { User } from '../user';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  username: string;
  profile: any[];
  repos: any[];
  user:any[];
  name:string;
  html_url:string;


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
