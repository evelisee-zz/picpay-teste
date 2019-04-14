import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Route } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  { path: 'user-list', component: UserListComponent, },
  { path: '**', redirectTo: 'user-list', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
