import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { RepoComponent } from './repo/repo.component';

const routes: Routes = [
  { path: 'profile-card', component: ProfileCardComponent},
  { path: 'Repositories', component: RepoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
