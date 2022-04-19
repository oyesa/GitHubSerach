import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 

import { GitRoutingRoutingModule } from './git-routing-routing.module';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { RepoComponent } from '../repo/repo.component';

// Router links to render profile and repo components
const routes:Routes = [
	{ path:"gitUser",component:ProfileCardComponent }, 
	{ path:"quotes",component:RepoComponent } 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GitRoutingRoutingModule,
    RouterModule.forRoot(routes) 
  ]
})
export class GitRoutingModule { }
