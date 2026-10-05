export interface Employee {
  id: number;
  employeeCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;

  departmentId: number;
  designationId: number;
  locationId: number;
  employmentTypeId: number;

  joiningDate: string;
  salary: number;
  status: EmployeeStatus;

  createdAt: string;
  updatedAt: string;
}

export type EmployeeStatus =
  | 'ACTIVE'
  | 'INACTIVE'
  | 'ON_LEAVE'
  | 'TERMINATED';