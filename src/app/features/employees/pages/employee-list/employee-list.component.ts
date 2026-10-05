import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {

  private readonly employeeService = inject(EmployeeService);
  private readonly destroyRef = inject(DestroyRef);

  readonly employees = signal<Employee[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadEmployees();
  }

  private loadEmployees(): void {
    this.loading.set(true);
    this.error.set(null);

    this.employeeService
      .getEmployees()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: employees => {
          this.employees.set(employees);
          this.loading.set(false);
        },
        error: error => {
          console.error('Failed to load employees', error);

          this.error.set('Unable to load employees.');
          this.loading.set(false);
        }
      });
  }
}