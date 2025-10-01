import {Component, Input} from '@angular/core';
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
}
