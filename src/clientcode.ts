import {Employee} from './employee';

class ClientCode{
    employees:Employee[]=[
        new Employee(1001,'RAJU',30000),
        new Employee(1002,'SUNIL',40000)
    ];

    getEmployee(id:any):Employee{
        for(var i in this.employees){
             if(this.employees[i].id==id){
                 return this.employees[i];
             }
        }
        return null;
    }

    
}
var cc = new ClientCode();
console.log(cc.getEmployee(1001));