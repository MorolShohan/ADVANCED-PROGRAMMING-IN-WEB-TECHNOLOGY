const country = " BD ";

console.log(country);

let playerName = "Shakib";
console.log(playerName);

// playerName = 34;

function multiply (a : number,b : number)
{
  return a * b ;
}

console.log(multiply(4,5))

let fruits = ['apple', 'banana','orange'];
fruits.push('sumit');
console.log(fruits);

let player = {
  name : 'shakib',
  age : 32,
  isCaptain : true,
};

player.name;

let b:string | number;

let dd : (string | number ) [] = [];

b = 'shohan';

dd.push('shohan', 19);

let c: {
  name : string,
  age : number,
  adult : boolean,
};

let gg:any [] = [];
gg.push(34);

let ez:{
  name : any;
  age : any;
};

ez = {
  name : 'ffff',
  age : 45,
}

let aaaa;
let ggggg:any[] = [];
ggggg.push(30);

const myFunc = (j : string, b : string, c?: string) =>
{
  console.log(c);
  console.log(`hey ${j} ${b}`);
  return j+b;
};

// const myfung: Function {
  
// }

myFunc('A','B');

type stringorNum = string | number ;
type userType = {name:string ; age : number}

const userDetails = (
  id : stringorNum,
  user : userType,
) =>{
  console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`)
};

const sayHello = (user: userType) =>
{
  console.log(`hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`);
}

let a : string;

let add : (x:number, y:number) => number;
add = (a:number, b:number) => {
return a+b;
}

let calculator : (x:number, y:number, z:string) => number;
calculator = (a:number, b:number, c:string) => {
if(c == 'add' )
{
 return a+b;
}

else 
{
  return a-b
}
}

console.log(calculator(4,5,'add'));

let userDetail : (id:number | string , userInfo:{
  name : string,
  age: number
}) => void;

userDetail = (id :number| string, user:{
  name : string,
  age: number
}) =>
{

}

 import {playerss} from "./classes/player.js";
 import {isPlayer} from "./interfaces/isplayer.js";
 let shakib : isPlayer;

const mashrafi = new playerss('mashrafi',30,'Bangladesh');
 shakib = new playerss('shakib',30,'Bangladesh');
const mahedi = new playerss('mahedi',30,'Bangladesh');
console.log(mashrafi.country);
console.log(mashrafi.name);
const players : playerss [] = [];
// playerss. (mahedi);


interface rectangleOptions{
  width: number;
  length:number;
}
function drawRectangle(options:{
    width : number,
    length: number,
})
{
  let width = options.width;
  let length = options.length;
}

let threeD ={
  width : 40,
  length : 23,
  height : 10,

};

drawRectangle(threeD);

const addID = <T>(obj: T) =>
{
  let id = Math.floor(Math.random() * 100);
  return {...obj, id};

};

// let user = addID({
//   name : "SHOHAN",
//   age : 40,
// });

let user = "Mashrafi";

addID(user);


enum ResponseType {SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN}
interface APIresponse<T>{
  status :number;
  type :ResponseType;
  data:T;
}

const response1: APIresponse<object> = {
  status:200,
  type:ResponseType.SUCCESS,
  data:{
    name : 'test',
    something: 200,
  }
};

console.log(response1);

let akash = [3,'hello',{p:3}];

let bfff:[number,string,object] = [3, 'world',{t:1}]
bfff[1] = 'push';
bfff.push();


akash[1] = 4;