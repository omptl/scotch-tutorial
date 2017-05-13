import { Component, Input } from '@angular/core';
import { User } from './user';
@Component({
    selector: 'user-profile',
    template: `
    
    `
})

export class UserProfileComponent {
    @Input()  user: User;
};