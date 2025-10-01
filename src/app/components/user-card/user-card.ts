import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss'
})
export class UserCard {
  @Input() user: User | undefined = new User();
  @Output() userSelected: EventEmitter<User> = new EventEmitter();

  public selectedUser(user: User | undefined): void {
    console.log("desde user-card.ts")
    this.userSelected.emit(user);
  }
}
