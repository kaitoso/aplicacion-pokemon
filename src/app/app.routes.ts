import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokemons',
    loadChildren: () => import('./features/pokemons/pokemons.route'),
  },
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
];
