import { Component, OnInit, ɵConsole } from '@angular/core';
import { Student } from './Student';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {
  message = 'Hello Miracle';
  stuObj: any;
  constructor() {
    console.log(this.message);
    this.stuObj = new Student('Jyothsna', 101);
    this.stuObj.displayStudent();
  }
  ngOnInit() {
  }
}
/******************* function1 ******************** */
console.log('--------------FUNCTION1------------');
function Sum(x: number, y: number): number {
  return x + y;
}
console.log('the sum is ', Sum(23, 56));
/*************************rest Parameters(pass infinite number of arguments)************ */
console.log('--------------FUNCTION2-----------');
function addNumbers(...nums: number[]) {
  let i: number;
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log('sum of the numbers', sum);
}
addNumbers(109, 254, 367);
addNumbers(1, 67, 95, 953, 66, 54, 99, 21);

// -------------------variables
console.log('--------------VARIABLES------------');
let name = 'laksnmi';
console.log('The name of the person is ' + name);

// ----------------datatypes
console.log('--------------DATATYPES------------');
var name1 = 'JAMESBOND';
const value = 6748;
console.log('name is ' + name1, 'value is' + value);


// -----------------Statements(if and switch)
console.log('--------------if STSTEMENT------------');
const x: number = 10;
const y = 20;
if (x > y) {
  console.log('x is greater than y.');
} else if (x < y) {
  console.log('x is less than or equal to y.');
} else {
  console.log('x is equal t y');
}
/*------------switch */
console.log('-------------------SWITCH---------------');
let day: number = 5;
switch (day) {
  case 0:
    console.log('It is a Sunday.');
    break;
  case 1:
    console.log('It is a Monday.');
    break;
  case 2:
    console.log('It is a Tuesday.');
    break;
  case 3:
    console.log('It is a Wednesday.');
    break;
  case 4:
    console.log('It is a Thursday.');
    break;
  case 5:
    console.log('It is a Friday.');
    break;
  case 6:
    console.log('It is a Saturday.');
    break;
  default:
    console.log('No such day exists!');
    break;
}
// ------------------functions 
console.log('-----------string methods--------------');
let str = new String('Thtis is string ttta');
console.log('str.charAt(8) is:' + str.charAt(8));
console.log('str.charAt(7) is:' + str.charAt(7));
console.log('str.charAt(9) is:' + str.charAt(9));
// returns the unicode value of the  characer at the given index
console.log('The unicode value at str.charAt(1) is:' + str.charCodeAt(1));
console.log('The unicode value at str.charAt(4) is:' + str.charCodeAt(4));
console.log('-----------CONCAT------------');
let str1 = String('day : sunday  ');
let str2 = String('month : july  ');
let str3 = str1.concat(str2);
console.log('concatination of two strings is : ' + str3);
let str4 = str3.concat('year : 2019');
console.log('the entire date format is :' + str4);
console.log('------------indexOf-------------------');
var index = str.indexOf('T');
console.log('indexOf found String :' + index);
var index1 = str.indexOf('t');
console.log('indexOf string is :' + index1);
var ldata = str.lastIndexOf('t');
console.log('-------------last index of t is  ' + ldata);
console.log('---------------locale compare-----------');
var lstr = new String('This is beautiful string');
var index = lstr.localeCompare('This is beautiful string');
console.log('localeCompare first :' + index);
var index = lstr.localeCompare('hello welcome');
console.log('localeCompare first :' + index);

console.log('----------------SEARCH------------');
var re = /is/;
if (str.search(re) === -1) {
  console.log('Does not contain "is"');
} else {
  console.log('contains "is"');
}
console.log('-------------------SLICE----------------');
 var l = str.slice(4,-1);
 console.log(l);
 var ll= str.split("",5);
 console.log(ll);

console.log('the substr is ' + str.substr(4, 3) );
console.log('The substring is ' + str.substring(2, 6));
console.log('-------------ARRAYS-------------');
var alpha1 = ['JYO', 'abd', 'mir'];
var alpha2 = ['1', '2', '3'];
var alpha3 = alpha1.concat(alpha2);
console.log('concatanation of arrays  : ' + alpha3);
var json1 = [{ 'id' : '23', 'name' : 'jyothsna' }];
console.log(json1);
var json2 = [{ 'id' : '24', 'name' : 'krishna' }];
var json3 = json1.concat(json2);
console.log('----------concatanation of json objects is-------------' + JSON.stringify(json3) );
var json4 = [{ 'id' : '25', 'name' : 'chirala'}];
var json5 = json3.concat(json4);
console.log( json4);
console.log('---------' + JSON.stringify(json5));
console.log('----------------EVERY METHOD-----------');
function isBig(element) {
  return (element >= 10);
}
var passed = [12, 25, 18, 130, 44].every(isBig);
const pass = [25, 4, 'fgbv', 87].every(isBig);
console.log('passed true values : ' + passed );
console.log('passed false value : ' + pass );
console.log('-----------FILTER METHOD-----------');
var fil = [34, 435, 7, 66, 7 , 56].filter(isBig);
console.log(fil);
//-------------JSON FILTER------------
const data = [
  {
    name: 'Bob',
    gender: 'male',
    age: 34,
    address : 'chirala'
  },
  {
    name: 'Alice',
    gender: 'female',
    age: 40,
    address : 'mysore'
  },
  {
    name: 'Carol',
    gender: 'female',
    age: 36,
    address : 'hyd'
  },
  {
    name: 'Ted',
    gender: 'male',
    age: 38,
    address : 'mydelhi'
  },
  
  {
    name: 'Alice',
    gender: 'female',
    age: 40,
    address : 'mysore'
  },
  {
    name: 'Alice',
    gender: 'female',
    age: 40,
    address : 'usa'
  },

];
const arr1 = data.filter(d => d.age > 37);
console.log('arr1', arr1);
const ageAndGender = d => d.age > 37 && d.gender === 'female';

const arr2 = data.filter(ageAndGender);
console.log('arr2', arr2);
function filterByString(data, s) {
  return data.filter(e => e.name.includes(s) || e.address.includes(s) );
}
console.log(filterByString(data, 'm'));
console.log('---------------------FOREACH---------------');
var num = [67, 98, 19, 56 , 64, 34, 19, 77 ];
num.forEach(function (value) {
    console.log(value);
});
Object.keys(data).forEach(function(k){
  // console.log(k + ' ------------- ' +data[k]);
  console.log(JSON.stringify(data[k]));
});
console.log('-------------INDEXOF--------------------');
console.log('Index of  56 is ' + num.indexOf(56));
console.log('last index of 19 is' + num.lastIndexOf(19));
function findIndex(jsonData, value){
  var indexNum = jsonData.findIndex(obj => obj.name === value);
  console.log('Index of json objects is' +  indexNum  );
  console.log('value at that index is '+ value);
}
findIndex(data, "jyo");/* call function */
findIndex(data, 'Bob');
findIndex(data, 'Alice');
console.log('------------JOIN-------------');
var array = [ 'jyo','jyosh','jyoshi'];
console.log('join of array objects is :'+ array.join());
console.log('join of array objects is :'+ array.join("@#$"));
console.log('--------------MAP----------------');
var numbers = [49, 625, 9, 25]; 
var roots = numbers.map(Math.sqrt); 
console.log("roots is : " + roots );
console.log('-------------PUSH----------')
var numbers1= numbers.push(12);
var numbers1= numbers.push(13);
console.log('-----------'+numbers);
console.log('The deleted element is :'+ numbers.pop());
let modelData = {
  name : 'jyothsna',
  gender : 'female',
  age : 32,
  address : 'hyderabad',
}
console.log('json push :' + data.push(modelData));
console.log(data);
let v1= data.pop();
console.log('deleted element is ' + JSON.stringify(v1));

console.log('--------------------------REDUCE------------------');
var total = [70, 671, 276, 332].reduce( function (a, b) { return a + b; });
console.log('-----total is : ' + total );
console.log('-------------REVERSE-----------');
console.log('reverse of array is ' + JSON.stringify( array.reverse() ) );
console.log('reverse of json is ' + JSON.stringify( data.reverse() ));
console.log('shifted element is ' + array.shift());
console.log('slice of aray is :' + array.slice(1, 2));
console.log('----------SORT-----------', array.sort());
console.log('----------SORT-----------', data.sort());
var add = array.splice(1, 0, "hello");
console.log('-------------SPLICE-----------', + array);
console.log('--------added element is ' + add);
console.log(array);
var rem = array.splice(2,1)
console.log('the removed element is '+ rem );
console.log("-----------TOSTRING--------------");
var arr = new Array("orange", "mango", "banana", "sugar");
var s1 = arr.toString();
console.log("Returned string is : " + s1 );
var s2 = arr.unshift("miracle");

console.log("-----------UNSHIFT---------- : " + s1);
console.log(s2);



