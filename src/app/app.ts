import {Component, signal} from '@angular/core';
import {UserCard} from './components/user-card/user-card';
import {User} from './models/user';
import {JsonPipe} from '@angular/common';
import {PipesDemo} from './components/pipes-demo/pipes-demo';
import {ResaltarPipe} from './pipes/resaltar-pipe';

@Component({
  selector: 'app-root',
  imports: [PipesDemo, ResaltarPipe, UserCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mi-proyecto-angular');
  public user: User = new User();
  public selectedUser: User= new User();
  public users: User[] = [];

  constructor() {
    this.user.nombre = 'Noe';
    this.user.email = 'noe.tipo@gmail.com'
    this.user.edad = 21;
    this.users = [
      {nombre: 'Juan Pérez', edad: 30, email: 'juan@email.com'},
      {nombre: 'María García', edad: 25, email: 'maria@email.com'},
      {nombre: 'Carlos López', edad: 35, email: 'carlos@email.com'}
    ];

  }

  public userSelected($user: User): void {

    this.selectedUser = $user;
  }
}
