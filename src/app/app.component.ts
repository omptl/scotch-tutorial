import { Component } from '@angular/core';
import { User } from './user';
import { UserProfileComponent } from './user-profile.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Hello!';
  users: User[] = [
    { id: 11, name: 'Om', username: 'omptl'},
    { id: 12, name: 'Raj', username: 'rajbro'},
    { id: 13, name: 'Bhim', username: 'bhimsen'},
  ];
  activeUser: User;

  selectUser(user){
    this.activeUser = user;
    console.log(this.activeUser);
  }

  onUserCreated(event){
    this.users.push(event.user);
  }
}
