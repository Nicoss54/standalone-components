import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  template: `
    <h1>User component Parent</h1>
    <a [routerLink]="['classic']"
      >Je souhaite aller dans le composant classic</a
    >
    <a [routerLink]="['admin']">Je souhaite aller dans le composant admin</a>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterModule],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
