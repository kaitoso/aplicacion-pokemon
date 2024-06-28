import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pokemons.component'),
  },
  {
    path: ':name',
    loadComponent: () => import('./detail/detail.component'),
  },
];

export default routes;
