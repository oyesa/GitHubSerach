import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { ProfileService } from '../profile.service';



@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.css']
})

export class SearchProfileComponent implements OnInit {
  public userQuery: string;




  @Output() searchReturn = new EventEmitter<any>()

  constructor(private profileservice: ProfileService, private profilecard: ProfileCardComponent) {}

  searchUser() {
    this.searchReturn.emit(this.userQuery)
  }

  ngOnInit(): void {
  }

}
