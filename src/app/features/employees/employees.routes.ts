import { Routes } from '@angular/router';

export const EMPLOYEE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/employee-list/employee-list.component')
        .then(m => m.EmployeeListComponent),
  },
];