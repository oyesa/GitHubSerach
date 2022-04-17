import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { RepoComponent } from './repo/repo.component';

const routes: Routes = [
  {path:"home",component:AppComponent},
  {path:"profile-card",component:ProfileCardComponent},
  {path:"repositories",component:RepoComponent},
  {path:"",redirectTo:"personal",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
