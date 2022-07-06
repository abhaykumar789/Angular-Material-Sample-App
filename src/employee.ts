export class Employee{
    id:number;
    name:string;
    salary:number;
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    getDetails():string{
        return `ID:${this.id} Name:${this.name} Salary:${this.salary}`;
    }
}