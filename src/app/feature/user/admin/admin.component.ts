import { Component, OnInit } from '@angular/core';

@Component({
  template: ` <h1>Je suis dans ke composant d'administration</h1> `,
  standalone: true,
})
export class UserAdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
