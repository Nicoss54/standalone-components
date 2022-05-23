import type { Routes } from '@angular/router';
import { UserAdminComponent } from './admin/admin.component';
import { UserClassicComponent } from './classic/classic.component';
import { UserComponent } from './user.component';

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', pathMatch: 'prefix', redirectTo: 'classic' },
      { path: 'classic', component: UserClassicComponent },
      { path: 'admin', component: UserAdminComponent },
    ],
  },
];
