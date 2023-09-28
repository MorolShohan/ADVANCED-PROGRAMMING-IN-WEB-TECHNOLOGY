const country = " BD ";
console.log(country);
let playerName = "Shakib";
console.log(playerName);
// playerName = 34;
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 5));
let fruits = ['apple', 'banana', 'orange'];
fruits.push('sumit');
console.log(fruits);
let player = {
    name: 'shakib',
    age: 32,
    isCaptain: true,
};
player.name;
let b;
let dd = [];
b = 'shohan';
dd.push('shohan', 19);
let c;
let gg = [];
gg.push(34);
let ez;
ez = {
    name: 'ffff',
    age: 45,
};
let aaaa;
let ggggg = [];
ggggg.push(30);
const myFunc = (j, b, c) => {
    console.log(c);
    console.log(`hey ${j} ${b}`);
    return j + b;
};
// const myfung: Function {
// }
myFunc('A', 'B');
const userDetails = (id, user) => {
    console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`);
};
let a;
let add;
add = (a, b) => {
    return a + b;
};
let calculator;
calculator = (a, b, c) => {
    if (c == 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculator(4, 5, 'add'));
let userDetail;
userDetail = (id, user) => {
};
import { playerss } from "./classes/player.js";
let shakib;
const mashrafi = new playerss('mashrafi', 30, 'Bangladesh');
shakib = new playerss('shakib', 30, 'Bangladesh');
const mahedi = new playerss('mahedi', 30, 'Bangladesh');
console.log(mashrafi.country);
console.log(mashrafi.name);
const players = [];
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
}
let threeD = {
    width: 40,
    length: 23,
    height: 10,
};
drawRectangle(threeD);
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
// let user = addID({
//   name : "SHOHAN",
//   age : 40,
// });
let user = "Mashrafi";
addID(user);
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["SUCCESS"] = 0] = "SUCCESS";
    ResponseType[ResponseType["FAILURE"] = 1] = "FAILURE";
    ResponseType[ResponseType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    ResponseType[ResponseType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(ResponseType || (ResponseType = {}));
const response1 = {
    status: 200,
    type: ResponseType.SUCCESS,
    data: {
        name: 'test',
        something: 200,
    }
};
console.log(response1);
let akash = [3, 'hello', { p: 3 }];
let bfff = [3, 'world', { t: 1 }];
bfff[1] = 'push';
bfff.push();
akash[1] = 4;
