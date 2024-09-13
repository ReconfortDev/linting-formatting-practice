import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForOf } from '@angular/common';

interface User {
  name: string;
  email?: string;
  age: number;
}

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user.name }} ({{ user.age }})</li>
    </ul>
  `,
  styleUrl: './user-list.component.css',
  imports: [NgForOf],
  standalone: true,
})
export class UserListComponent implements OnInit {
  users!: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
