class Employee{
    empCode: Number;
    empName: string;
      
    constructor(empcode: number, name:string) {
        this.empCode= empcode;
        this.empName=name;
    }
    displayName():void {
        console.log("Name = " + this.empName + ", Employee Code= " + this.empCode);
    }
}
let emp= new Employee(100, "Steve");
emp.displayName();