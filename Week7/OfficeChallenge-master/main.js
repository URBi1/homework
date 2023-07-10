//write your code here to make the tests pass
class Document {
    constructor(EmployeeName){
        this.EmployeeName=EmployeeName
    }
}

class Employee{
    constructor(name){
        this.name=name
    }
    work(office)
    {
        for (let i = 0; i < 10; i++) {
            office.push(new Document());
        }
    }
}

class Manager{
    constructor(name){
       // this.employees=employees
        this.name=name
        this.employees = [];
    }
    hireEmployee(name){
        this.employees.push(new Employee(name))
    }
    askEmployeesToWork(office)
    {
        for(let employee of this.employees) {
            employee.work(office);
        }
    }
}

class Cleaner{
    constructor(name){
        this.name=name
    }
    clean(){
        console.log("Clean")
    }
}


