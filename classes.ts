class Employee{
    name!:string;
    address!: string;
    age!: number; 


    constructor(name:string, address: string, age:number ){
        this.name=name;
        this.address= address;
        this.age=age;
    }

    maiordIdade():boolean{
        
        if(this.age>18){
            return true;
        }
        else{
            return false;
        }
    }
    Morada():string{
        return `${this.name} lives at ${this.address}`
    }
}

let employee = new Employee('Arthur', "Bairro central", 15);


console.log(employee.Morada());
