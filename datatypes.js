"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// String 
let lname;
lname = 'Ngale';
let newname = lname.toUpperCase();
console.log(newname);
// number
let age;
age = 25;
age = 25.5;
let dob = '25';
let result = parseInt(dob);
// boolean
let isValid = false;
console.log(isValid);
// array
let emplist;
emplist = ['manga', "10", 'Guala'];
let deplist;
deplist = [1, 2, 3, 4, 5];
let results = deplist.filter((num) => num > 2);
let num = deplist.find((num) => num == 2);
console.log(results);
console.log(num);
