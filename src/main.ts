import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CoreModule } from './app/core/core.module';
import { TodoModule } from './app/feature/todo/todo.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const APP_ROUTES: Routes = [
  {
    path: 'user',
    loadChildren: async () =>
      (await import('./app/feature/user/user.routes')).USER_ROUTES,
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(APP_ROUTES), TodoModule),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(CoreModule),
  ],
}).catch(console.error);
