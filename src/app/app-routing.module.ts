import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)},
  {path: 'avatars', loadChildren: () => import('./avatars/avatars.module').then(m => m.AvatarsPageModule)},
  {path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsPageModule)},
  {path: 'concurrency', loadChildren: () => import('./concurrency/concurrency.module').then(m => m.ConcurrencyPageModule)},
  {path: 'ng-content', loadChildren: () => import('./ng-content/ng-content.module').then(m => m.NgContentPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
