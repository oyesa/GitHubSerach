import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  profile: User;
  repos: any[];
  repo:Repository
  repoData= []
  profileservice:ProfileService;
  

  constructor(profileservice: ProfileService) {}

  findProfile(username:string){
    this.profileservice.getProfileRepos(username).then(()=> {
      this.repo = this.profileservice.repo;
    }, (error)=> {
      console.log(error)
    });
    

  }

  ngOnInit(): void{
    this.findProfile('oyesa');
    this.repoData = this.profileservice.repoData
    
  }

  // getProfileRepos(){}

  // ngOnInit(): void {
  //   this.profileServce.getProfileRepos().subscribe((repo:any[]) =>{
  //     console.log(repo);
  //     this.repo = repo;
  //   });
  // }

}
