import { Routes } from '@angular/router';
import { DetailedPagePage } from './folder/detailed-page/detailed-page.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () => import('./folder/home/home.page').then( m => m.HomePage),
      },
      {
        path: ':id',
        component: DetailedPagePage,
        data: {some_data: ''}
      },
    ]
  },
  {
    path: 'calendar',
    loadComponent: () => import('./folder/calendar/calendar.page').then( m => m.CalendarPage)
  },
];
