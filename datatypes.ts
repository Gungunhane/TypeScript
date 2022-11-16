import { isConstructorDeclaration } from "typescript";

// String 
let lname : string;

lname = 'Ngale';

let newname = lname.toUpperCase();

console.log(newname);

// number

let age:number;
age =25;
age = 25.5;

let dob = '25'

let result = parseInt(dob);

// boolean

let isValid:boolean=false;

console.log(isValid);

// array

let emplist:string[];

emplist = ['manga', "10", 'Guala']

let deplist: Array<number>;

deplist = [1,2,3,4,5];

let results = deplist.filter((num)=>num>2);

let num = deplist.find((num)=>num==2);

console.log(results);
console.log(num);

let swapNumbs:[firstN:number, second:number];
 function swapNumbers(num1:number,num2:number):[number,number]{
    return[num2,num1]

 }
 swapNumbs = swapNumbers(10,20);

 swapNumbs[0];