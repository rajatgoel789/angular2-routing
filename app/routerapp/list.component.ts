import { Component, OnInit } from '@angular/core';
import {EmployeeDataService} from './../services/employee.service';
import {Router} from '@angular/router';

@Component({
    selector: 'list-page',
    templateUrl: '../app/routerapp/list-page.component.html',
    providers:[EmployeeDataService]
})

export class ListComponent implements OnInit {
    public  employees ; 
    constructor(private empServ:EmployeeDataService , private router:Router) { }

    ngOnInit() { 
        console.log(this.empServ.getEmployees());
        this.employees = this.empServ.getEmployees() ; 
    }

    selctEmp(emp){
        console.log(emp);
        this.router.navigate(['list-detail',emp.EmpNo])
    }
}