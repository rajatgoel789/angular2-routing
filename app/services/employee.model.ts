export class EmployeeInfo {
    constructor(
        public EmpNo: number,
        public EmpName: string,
        public Salary: number,
        public DeptName: string,
        public Designation: string
    ) {

    }
}

export const Employees = [
    { EmpNo: 1001, EmpName: 'A', Salary: 12000, DeptName: 'IT', Designation: 'MGR' },
    { EmpNo: 1002, EmpName: 'B', Salary: 13000, DeptName: 'HR', Designation: 'MGR' },
    { EmpNo: 1003, EmpName: 'C', Salary: 14000, DeptName: 'IT', Designation: 'TECH' },
    { EmpNo: 1004, EmpName: 'D', Salary: 15000, DeptName: 'HR', Designation: 'MGR' }
];