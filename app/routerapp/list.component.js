System.register(['@angular/core', './../services/employee.service', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, employee_service_1, router_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(empServ, router) {
                    this.empServ = empServ;
                    this.router = router;
                }
                ListComponent.prototype.ngOnInit = function () {
                    console.log(this.empServ.getEmployees());
                    this.employees = this.empServ.getEmployees();
                };
                ListComponent.prototype.selctEmp = function (emp) {
                    console.log(emp);
                    this.router.navigate(['list-detail', emp.EmpNo]);
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'list-page',
                        templateUrl: '../app/routerapp/list-page.component.html',
                        providers: [employee_service_1.EmployeeDataService]
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeDataService, router_1.Router])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
