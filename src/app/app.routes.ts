import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/employees/employees.routes')
        .then(m => m.EMPLOYEE_ROUTES),
  },
];