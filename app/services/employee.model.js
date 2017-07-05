System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmployeeInfo, Employees;
    return {
        setters:[],
        execute: function() {
            EmployeeInfo = (function () {
                function EmployeeInfo(EmpNo, EmpName, Salary, DeptName, Designation) {
                    this.EmpNo = EmpNo;
                    this.EmpName = EmpName;
                    this.Salary = Salary;
                    this.DeptName = DeptName;
                    this.Designation = Designation;
                }
                return EmployeeInfo;
            }());
            exports_1("EmployeeInfo", EmployeeInfo);
            exports_1("Employees", Employees = [
                { EmpNo: 1001, EmpName: 'A', Salary: 12000, DeptName: 'IT', Designation: 'MGR' },
                { EmpNo: 1002, EmpName: 'B', Salary: 13000, DeptName: 'HR', Designation: 'MGR' },
                { EmpNo: 1003, EmpName: 'C', Salary: 14000, DeptName: 'IT', Designation: 'TECH' },
                { EmpNo: 1004, EmpName: 'D', Salary: 15000, DeptName: 'HR', Designation: 'MGR' }
            ]);
        }
    }
});
