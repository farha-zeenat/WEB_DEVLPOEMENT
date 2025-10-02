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

const arr = [4,5,6,7,6,8,9];

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
const idx=arr.includes(55);

console.log(idx);



