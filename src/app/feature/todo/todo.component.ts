import { Component, OnInit } from '@angular/core';

@Component({
  template: `<h1 *ngIf="true">Je suis dans le composant Todo</h1>`,
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
