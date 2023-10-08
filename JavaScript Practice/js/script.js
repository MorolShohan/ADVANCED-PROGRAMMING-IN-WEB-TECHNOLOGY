
var x = 10;
var y = 20;
z = y-x;

document.getElementById('html').innerHTML = z;
// this is comment
/*

*/
console.log(z);

let ali = 29;
let shuvo = 2;
let totalage = ali * shuvo;
document.getElementById('html').innerHTML = totalage;
let name = 'Shohan Morol';
document.getElementById('gg').innerHTML = name.split('');

let firstName = 'Shohan';
let lastName = promt('what is your last name?');

document.getElementById('ez').innerHTML = firstName + ' ' + lastName;
console.log(firstName + ' ' + lastName);

let phone = 'oneplus' + 7;
let model = 7;
let mobile = 8;
let myphone = ['samsung','apple','nokia'];
let phonedetails = {
  model : 'Iphone',
  storage : '128 gb',
  color : 'black',
}

document.getElementById('html').innerHTML = phone==mobile;
document.getElementById('css').innerHTML = myphone[0];
console.log(phone);
document.getElementById('cs').innerHTML = phonedetails.color;
console.log(phonedetails);
console.log(myphone);

let now = 2023;
let myage = 2000;
let age = 22;

let fullAge = now - myage;
document.getElementById('c').innerHTML = fullAge > age;

function name(){
  document.write('hello world');
  console.log('hello world');

}

name();

console.log(Math.PI);
console.log(Math.pow(3,2));
console.log(Math.sqrt(64));
console.log(Math.abs(-64));
console.log(Math.ceil(64.3));
console.log(Math.floor(64.3234234));
console.log(Math.max(1,3,4,5,6));
console.log(Math.min(1,3,4,5,6));
console.log(Math.random());
console.log(Math.random().toFixed(1)*10);

let upperValue = 6;
let lowerValue = 1;

let resultValue = Math.ceil(Math.random() * (upperValue - lowerValue)+1);

console.log(resultValue);
let time = new Date().getHours();
if(time >= 6 && time <12){
console.log('Good Morning');
}
else if(time>=12 && time <18)
{
  console.log('Good Afternoon');
}
else {
console.log('Good evening');
}

let day ;
switch(new Date().getDay()){
  case 0:
    day= "sunday";
    break;
    case 1:
    day= "monday";
    break;
    case 2:
    day= "tuesday";
    break;
    case 2:
    day= "wednesday";
    break;
    case 2:
    day= "thursday";
    break;
    case 2:
    day= "friday";
    break;
    case 2:
    day= "saturday";
    break;
    default:
      day = "not found";
}
console.log(day);
const cars = ['bus','car','micro','bike']
for(let i=0; i<=cars.length;i++)
{
  console.log(cars);
  // console.log('hello world' ,i);
  if(i == 4)
  break;
}

for (car of cars)
console.log(car);

let num = 1;

while(num <= 10)
{
  console.log('fuck',num);
  num++;
}
