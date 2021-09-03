import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }

  getEmployees() {
    return [
      {
        'id': 1,
        'firstName': 'Abdullah',
        'lastName': 'Numan'
      },
      {
        'id': 1,
        'firstName': 'Abdullah',
        'lastName': 'Mamun'
      },
      {
        'id': 1,
        'firstName': 'Sahera',
        'lastName': 'Begum'
      }
    ]
  }
}
