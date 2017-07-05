import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {EmployeeDataService} from './../services/employee.service';

@Component({
    selector: 'list-detail-name',
    templateUrl: '../app/routerapp/list-page-detail.component.html',
    providers:[EmployeeDataService]
})

export class ListDetailComponent implements OnInit {
    public employee;
    constructor(private empServ:EmployeeDataService,private activeRoute:ActivatedRoute) { }

    ngOnInit() {
        const empId = this.activeRoute.snapshot.params['empId'];
        console.log("empId",empId);
        this.empServ.employees.forEach((emp)=>{
            if(emp.EmpNo ==empId){
                this.employee = emp ; 
            }
        })

     }
}