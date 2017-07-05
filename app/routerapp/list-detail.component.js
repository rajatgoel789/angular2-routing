System.register(['@angular/core', '@angular/router', './../services/employee.service'], function(exports_1, context_1) {
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
    var core_1, router_1, employee_service_1;
    var ListDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            }],
        execute: function() {
            ListDetailComponent = (function () {
                function ListDetailComponent(empServ, activeRoute) {
                    this.empServ = empServ;
                    this.activeRoute = activeRoute;
                }
                ListDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var empId = this.activeRoute.snapshot.params['empId'];
                    console.log("empId", empId);
                    this.empServ.employees.forEach(function (emp) {
                        if (emp.EmpNo == empId) {
                            _this.employee = emp;
                        }
                    });
                };
                ListDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'list-detail-name',
                        templateUrl: '../app/routerapp/list-page-detail.component.html',
                        providers: [employee_service_1.EmployeeDataService]
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeDataService, router_1.ActivatedRoute])
                ], ListDetailComponent);
                return ListDetailComponent;
            }());
            exports_1("ListDetailComponent", ListDetailComponent);
        }
    }
});
