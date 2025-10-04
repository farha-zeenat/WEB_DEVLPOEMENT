//console.log("Hello World");
//var a=5;
//function test(){
    //var a=6;
    //a=a=2;
    //console.log(a);
//}

//test();

/*let a=5;
function test(){
    let a=5;
    a=a+5;

}
test();
console.log(a);

let a=5;
let b='5';

console.log(a===b);

types of  data types:
1.String
2.Number
3.BigInt
4.Boolean
5.undefined
6.Null
7.Symbol
8.Object 

let a=undefined;
console.log(typeof a);*/

//const arr=[4,5,6,7,8];
//console.log(a[3]);
//for(let a of arr){
  //  console.log(a);
//}
//for(let a in arr){
   // console.log(arr[a]);
//}

//const person={fname:"Jhone",lane:"Doe",age:"25"};
//for(let x in person){
   // console.log(person[x]);
//}

//function print(a){
   // console.log(a);
//}
//

//const print = function (a){
    //console.log(a);
//}

//const print=(a)=>{
    //console.log(a);
//}


//arr.forEach ((a)=>{
   // console.log(a);});
   
   
   //console.log(arr.length);
//console.log(arr[2]);
//console.log(arr.at(-2));
/*arr.push(9);
arr.pop();
arr.unshift(3);
arr.shift();
arr.splice(2,0,10);
const arr1 =[[1,2,3,4],[5,6],[7,8]];
const arr2=arr1.flat();

const arr3=arr2.slice(2);
console.log(arr2);
console.log(arr3);




for (let a of arr){
    console.log(a*2);
    a=a*2;

}
console.log(arr);*/

//const arr = [4,5,6,7,6,8,9];

//const newArr=arr.map((x)=>x*2);
//const newArr=arr.filter((x)=>x>6);
//const ele=arr.find ((x)=>x>6);
//let sum=0;

//for (const element of arr){
    //sum+=element;
//}

/*const ele=arr.reduce((acc,item)=>{
    acc+=item;
    return acc;


},0)*/
/*
task1: multiply each element by 9;
task2: after multiply filter element greater 50;
task3: after filter add all filtered element;

*/

//const ele=arr.map(x=>x*9).filter(x=>x>50).reduce((sum,item)=>sum+=item,0);

//const idx=arr.findIndex(x=>x>6);
//const idx=arr.findLast(x=>x>6);
//const idx=arr.findLastIndex(x=>x>6);
//const idx=arr.indexOf(6);
//const idx=arr.lastIndexOf(6);
//const idx=arr.includes(55);

//console.log(idx);

//const arr2=['d','a','c','b'];
//arr2.sort();
//const  arr3=arr2.toSorted();
//arr2.sort((a,b)=>a-b);
//arr2.sort((a,b)=> b-a);
///console.log(arr2);

//arr2.reverse();
//const arr3=arr2.toReversed();
//console.log(arr3);
/*const arr2=[4,12,1,5,6];
const arr3=[5,6,7,8,10,12];
const arr=[...arr2,...arr3];
console.log(arr);

const cars=[
    {type:"Volvo", year: 2020

    },
    {type:"marcedes",year:2022

    },
    {type:"bmw",year:2000

    }
]

cars.sort((a,b)=>a.year-b.year);
console.log(cars);

const arr2=[4,12,1,5,6];
const arr3=[5,6,7,8,10,12];

const arr=[...arr2,...arr3];
console.log(arr);

const a=5;
const b=6;
const c=14;

console.log(Math.PI);
console.log(Math.round(8.4));
console.log(Math.ceil(8.4));
console.log(Math.floor(8.4));
console.log(Math.trunc(8.4));
console.log(Math.pow(8,2));
console.log(Math.sqrt(64));
console.log(Math.abs(-8.4));

console.log(Math.max(a,b,c));

console.log(Math.min(a,b,c));

const arr=[4,5,0,2,3];

console.log(Math.max(...arr));

console.log(Math.min(...arr));

let a=123;
console.log(typeof a.toString());

let  x=5.23456;

console.log(x.toFixed(0));

let x="5";
console.log(typeof parseInt(x));
console.log(Number.isInteger("10"));
console.log(Number.isFinite(4/0));
console.log(Number.isNaN(7/"abc"));*/

//console.log(Math.random());
//const rand=Math.floor(Math.random()*10); //0-9
//const rand=Math.floor(Math.random()*12); //0-9
const rand=Math.floor(Math.random()*10)+1; //0-9
console.log(rand);