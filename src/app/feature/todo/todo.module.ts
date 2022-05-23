import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: 'list', component: TodoComponent }]),
  ],
  exports: [],
  declarations: [TodoComponent],
  providers: [],
})
export class TodoModule {}
