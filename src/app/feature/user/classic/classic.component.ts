import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  template: `
    <h1>Je suis dans le classic user component</h1>
    <ul>
      <li *ngFor="let user of users$ | async">{{ user.name }}</li>
    </ul>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class UserClassicComponent implements OnInit {
  users$: Observable<Array<any>>;
  constructor(private readonly httpCLient: HttpClient) {}

  ngOnInit(): void {
    this.users$ = this.httpCLient.get<Array<any>>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
