import { Injectable } from '@angular/core';

import {EmployeeInfo,Employees} from '../services/employee.model';


@Injectable()
export class EmployeeDataService {
    employees=Employees;
    constructor() {

     }
     getEmployees(){
         return this.employees;
     }
}