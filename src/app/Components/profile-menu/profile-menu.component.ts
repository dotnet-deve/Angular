import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent implements OnInit {
  constructor(public auth:AuthService){}
  ngOnInit(){
    
  }
  logout() {
    this.auth.logout();
  }
}
