// Task 1 - Creating Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    };
    getDetails () {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`
    };// Method that returns the formatted string and get details
    calculateAnnualSalary() {
        return this.salary * 12;
    };// Calculates the annual salary for the employee
};
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);// Instantiate employee object
console.log(emp1.getDetails()); // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
console.log(emp1.calculateAnnualSalary());  // Expected output: 60000

// Task 2 - Creating a Manager Class
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary)// Inherits the Employee class properties
        this.teamSize = teamSize;// New addition that is exclusive to the Manager class
    };
    getDetails(){
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    };
    calculateBonus() {
        return this.salary * 12
    };
};
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
console.log(mgr1.calculateBonus()); // Expected output: 9600

// Task 3 - Creating a Company Class
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    };
    addEmployee(employee) {
        this.employees.push(employee);// Adds the employee class 
    };
    listEmployees() {
        this.employees.forEach(employees => console.log(employees.getDetails()));
    }; // method to list all employee details
    // Task 4 - Implementing a Payroll System
    calculateTotalPayroll() {
        return this.employees.reduce((total, employee) => {
            return total + employee.calculateAnnualSalary();
        }, 0);
    };
    // Task 5 - Implementing Promotions
    promoteToManager(employee, teamSize) {
        if (employee instanceof Manager) {
            console.log(`${employee.name} is already a Manager.`)
            return;
        }
        const manager = new Manager(
            employee.name,
            employee.id,
            employee.department,
            employee.salary,
            teamSize
        );
        const index = this.employees.findIndex(emp => emp.id === employee.id);
        if (index !== -1) {
            this.employees[index] = manager;
        }
    }
}
const company = new Company("TechCorp");
company.addEmployee(emp1);//"Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
company.addEmployee(mgr1); // "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
console.log(company.calculateTotalPayroll()); 
// Expected output: 172800 (assuming emp1 and mgr1 salaries)
company.promoteToManager(emp1, 3);
company.listEmployees();
// Expected output: "Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3"


