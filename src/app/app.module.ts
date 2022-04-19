import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './profile.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RepoComponent } from './repo/repo.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { DateCounterPipe } from './date-counter.pipe';
import { HighlightDirective } from './highlight.directive';
import { SearchProfileComponent } from './search-profile/search-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RepoComponent,
    ProfileCardComponent,
    DateCounterPipe,
    HighlightDirective,
    SearchProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
