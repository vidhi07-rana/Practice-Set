
//objects in js
// const object= {

//     harry:20,
//     priya:40,
//     rudra:70

// }
// for(let a in object){

//     console.log(object[a])
// }

// function fact(n) {
//     if (n < 0) {
//         console.log("The number is not valid");
//     } else if (n === 0) {
//         console.log("The factorial of 0 is 1");
//     } else {
//         let fac = 1; 
//         for (let i = 1; i <= n; i++) {
//             fac *= i;
//         }
//         console.log("The factorial of " + n + " is " + fac);
//         return fac; 
//     }
// }


// fact(4);



// let nae = "                    vidhi               ";
// console.log(nae.trimEnd());

//Array
// const num1 = [2,34,5,3,5]
// // for(let i=0; i<num.length;i++){
// //     console.log(num[i])
// // }

// num1.forEach((element)=>{
//     console.log(element*element);
// })


// const arr = [1,2,3,4];
// const a1 = arr.reduce((h1,h2)=>{
// return h1 + h2;
// });
// console.log(a1);





// const num = [2,34,5,3,5]
// for(let i=0; i<num.length;i++){
//     console.log(num[i])
// }

// num.forEach((element)=>{
//     console.log(element*element);
// })



//Promises
// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Resolved after 2 seconds");
//         resolve(46);

//     })
// })

// p1.then((value)=>{
//     console.log(value);
//       return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//         resolve("promise 2 ")
//        },2000)
    
//     })
   
// }).then((value)=>{
//     console.log("we are done ");
//     return 2

// }).then((value)=>{
//     console.log("we are finally done",value);
// })



//async/await

// async function marry(){
    
// let delhiWeather = new Promise((resolve, reject)=>{
//     setTimeout(()=>{ resolve("21 Deg")
//         console.log("the delhi has 21 deg");}, 7000);
   
// })
 
// let bangloreWeather = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("the delhi has 27 deg")
//         resolve("27 Deg")
//     },10000);
// })
// let a =prompt("weather Information?")
// console.log(a)
//  let delhiW = await delhiWeather;
//  let bangLOREW = await bangloreWeather;
//  return [delhiW, bangLOREW];


// }

// async function cherry(){
//     console.log("Hello now u are in cherry function");
// }

// const main1 = async ()=>{
//     let a = await marry();
//     console.log(a)
//     let b = await cherry();

// }

// main1();


//fetching a data with async and await 
// async function sum(a,b){
//   return (a + b);
// }

// async function fetchdata(){
//     try{
//     let respones = await sum(2,6);
//     // console.log(data)
//     console.log(respones);
//     }catch(err){
// console.log("your getting error fetching data" + err)
//     }
// }

// fetchdata();

// //fetching data from json server 
// async function fetchdata1(){
//     try{
//     let respones = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await respones.json();
//     console.log(data)
//     console.log(respones.status)
//     console.log(respones.statusText)
   
//     }catch(err){
// console.log("your getting error fetching data" + err)
//     }
// }

// fetchdata1();

// //some example of js
// function prime(n){

//     for(let i=2 ; i<n; i++){
//         if(n % i === 0){
//             return false;
//         }
//         return true;
//     }
// }

// console.log( prime(4));

// //promises with fetch api
// let  p = fetch("https://jsonplaceholder.typicode.com/posts/1");

// p.then((value)=>{
//     console.log(value);
//     return value.json();
//     // return value.text();


// }).then((value1)=>{
//     console.log(value1);
// })

//post fetch API
// async function createTodo(){
// let options ={
//     method :'POST',
//     headers:{
//         'Content-type':'application/json'
//     },
//     body: JSON.stringify({
    
//         "id": 101,
//         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     }),


// }
// let a = await fetch('https://jsonplaceholder.typicode.com/posts', options);
// let response = await a.json();
// return response;
 
// }

// async function gettODO(id){
//      let a = await fetch('https://jsonplaceholder.typicode.com/posts');
//      let r = await a.json();
//      return r.find(post => post.id === id);
// }

// // let a = fetch(" fetch('https://jsonplaceholder.typicode.com/posts', options);")
// // a.then((value)=>value.json()).then((value2)=>console,log(value2));


// async function mainFun(){
//     let todo = await createTodo()

//     console.log(await gettODO(101));
//      console.log(todo);
// }
 
// mainFun()

// async function createTodo() {
//     let options = {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             "id": 11,
//             "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//             "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//         }),
//     }
//     let a = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = await a.json();
//     console.log('Create response:', response); 
//     return response;
// }



// async function mainFun() {
//     let todo = await createTodo();
//     console.log('Created Todo:', todo);
    
// }

// mainFun();
//cookie
// alert(document.cookie)

// let key = prompt("Enter the key of your choice");
// let value = prompt("Enter the value of your choice")

// localStorage.setItem(key, value)
// console.log(`${key} = ${value}`);
// console.log(`The value of ${key} at is ${localStorage.getItem(key)}`);

// if(key == 0 ){
//     localStorage.clear();
// }


// let url = "https://jsonplaceholder.typicode.com/posts"
// let response = fetch(url)

// response.then((v)=>{
//     return v.json();
// }
// ).then((contents)=>{
//     ihtml=""
//     console.log(contents);

//     for(item in contents){
//         console.log(item.id);
//         console.log(contents[item]);
//         ihtml += ` 
//         <div class="card" style="width: 20rem;">
//             <img src="https://tse4.mm.bing.net/th/id/OIP.CEJZdk7LfdT0LWq3KwIjAwHaE7?rs=1&pid=ImgDetMain" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">Learn To Code </h5>
//                 <p class="card-text">${contents[item].id}</p>
//               <p class="card-text">${contents[item].title}</p>
//             <p class="card-text">${contents[item].body}</p>

//               <a href="#" class="btn btn-primary">Join Now</a>
//             </div>
//           </div>
        
//     `
//     }
    
// cardContainer.innerHTML = ihtml;
// })


// let a = prompt("Enter the note here");

// localStorage.setItem("note", a);

// let c = confirm("Do yoiu wanna delete the note")
// if(c){
//     localStorage.removeItem("note")
//     alert("Note is deleted successfully");
// }


let fruits = ["Apple", "Banana", "Cherry"];

let secondFruit = fruits[1];


fruits[2] = "Orange"; 

fruits.push("Grapes"); 
fruits.unshift("Mango"); 


let lastFruit = fruits.pop(); 
let firstFruit = fruits.shift(); 


for (let fruit of fruits) {
    console.log(fruit); 
}


let upperFruits = fruits.map(fruit => fruit.toUpperCase()); 


let longFruits = fruits.filter(fruit => fruit.length > 5);

// 9. Array Methods: reduce
let concatenatedFruits = fruits.reduce((acc, fruit) => acc + ', ' + fruit);

// 10. Find Elements
let fruitWithB = fruits.find(fruit => fruit.startsWith('B'));

// 11. Sort an Array
fruits.sort(); 

// 12. Array of Objects
let students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];

// 13. Array Methods with Objects: map and filter
let studentNames = students.map(student => student.name); 
let gradeAStudents = students.filter(student => student.grade === 'A');


let hasGradeA = students.some(student => student.grade === 'A');
let allOlderThan18 = students.every(student => student.age > 18); 

//prototype of prototype of an object- but not use much  
let x = {
    name: "vidhi",
    sub : "Javascript"
}
console.log(x);

let p = {
    run: ()=>{
        console.log("run");
    }
}
let y={
    surname:"Rana"
}
p.__proto__= y;


x.__proto__= p;
x.run();
console.log(x.surname)


// class RailwayForm{

//     submit(){
//         console.log(this.name +  ": Form is Submitted successfully"+ "your train no is: " + this.trainNo );
//     }
//     cancel(){
//         console.log(this.name + ": This Form is cancelled");
//     }
//     fill(givename, trainno){
//         this.name = givename;
//         this.trainNo = trainno
//     }
// }

// let priti = new RailwayForm();
// priti.fill("priti", 467839);
// let prerna = new RailwayForm();
// prerna.fill("prerna",573389);


// prerna.submit();
// priti.submit();
// priti.cancel();

// class RailwayForm1 {
//     constructor(givename, trainno) {
//         console.log("The constructor is called..."+ trainno + givename);
//         this.name = givename;
//         this.trainNo = trainno;
//     }
    
//     submit() {
//         console.log(this.name + ": Form is submitted successfully. Your train no is: " + this.trainNo);
//     }

//     cancel() {
//         console.log(this.name + ": This form is cancelled");
//     }
// }

// let priti = new RailwayForm1("Priti", 467839);
// let prerna = new RailwayForm1("Prerna", 573389);

// prerna.submit();
// priti.submit();
// priti.cancel();


//inheritance 

class Animal{
    constructor(givename, color) {
                console.log("The constructor is called..."+ color + givename);
                this.name = givename;
                this.colors = color;
            }

            run(){
                console.log(this.name + " is running")
            }
            bark(){
                console.log(this.name + " is barking")
            }       
}

class Monkey extends Animal{
    eat(){
        console.log(this.name+ " is eating banana")
    }
}

let monkey = new Monkey("chimpu", "grey")
monkey.eat();
monkey.run();

class RailwayForm {
    constructor(givename, trainno) {
        console.log("The constructor is called... " + trainno + " " + givename);
        this.name = givename;
        this.trainNo = trainno;
    }

    submit() {
        console.log(this.name + ": Form is submitted successfully. Your train no is: " + this.trainNo);
    }

    cancel() {
        console.log(this.name + ": This form is cancelled");
    }

    requestdays(days) {
        console.log(`I want to travel for ${days} days`);
    }
}

class ExpressRailwayForm extends RailwayForm {
    constructor(givename, trainno, expressCharge) {
        super(givename, trainno); 
        this.expressCharge = expressCharge;
    }

    submit() {
        super.submit(); 
        console.log(this.name + ": Express charge is: " + this.expressCharge);
    }

    cancel() {
        super.cancel(); 
        console.log(this.name + ": Express charge refund is: " + this.expressCharge / 2);
    }

    requestdays(days) {
        super.requestdays(days);
        console.log(this.name + " days are granted ");
    }
}

let priti = new RailwayForm("Priti", 467839);
let prerna = new ExpressRailwayForm("Prerna", 573389, 100);

priti.submit();
priti.cancel();
priti.requestdays(2);

prerna.submit();
prerna.cancel();
prerna.requestdays(3);


class Student{
    constructor(name){
        // this._name = name;
        this.name = name;
    }

    lunchTime(){
        console.log(`Lunch time of ${this.name} is at 1' Oclock`);
    }
    
    // lunchTime(){
    //     console.log("Lunch time of " + Student.capitalize(this.name) + "is at 1' Oclock");
    // }

    // get name(){
    //     return this._name
    // }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length);
    }
}

let j = new Student(Student.capitalize("vidhi"));
console.log(j.name)
j.lunchTime();


class Complex{
    constructor(real, imaginary){
        this.real = real ;
        this.imaginary = imaginary;

    }
    add(num){
this.real = this.real + num.real;
this.imaginary = this.imaginary + num.imaginary;
    }
}

let a = new Complex(2,4);
let b = new Complex(4,5)
// a.add(b);
b.add(a)
console.log(a.real, a.imaginary)
console.log(b.real,b.imaginary)

class Password {
    constructor(){
        console.log("-----Welcome to Password Generater------");
        this.pass = ""
    }
    generatePassword(len){
        let char = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "1234567890";
        let special = "!@#$%^&*()-=";

        if(len<3){
            console.log("Your password should be more than three characters");
        }
        else {
            let i = 0;
            while(i < len){
                this.pass += char[Math.floor(Math.random()* char.length)]
                this.pass += numbers[Math.floor(Math.random()* numbers.length)]
                this.pass += special[Math.floor(Math.random()* special.length)]
                i+=3;

            }
            return this.pass
        }
   
    }

}
let p1 = new Password();

console.log(p1.generatePassword(9))


// (async () => {
//     const createPromise = () => new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(345); 
//         }, 3000);
//     });

//     try {
//         let r = await createPromise();
//         console.log(r);  

//         let s = await createPromise();
//         console.log(s); 

//         let t = await createPromise();
//         console.log(t);  // Should log 345 after another 3 seconds
//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();


let names = ["vidhi","riya"]

for(let name in names ){
  console.log(name);
}

let names1 = ["vidhi","riya"]

for(let name of names1 ){
  console.log(name);
}


//destructuring of array 
let arr = [3,5,4,6,7,8,1]
// let [w,z] = arr
// console.log(w, z)
// let [w, z,...rest] = arr
// console.log(w, z, rest)
let [w , , ,...rest] = arr
console.log( w, rest)

let obj = {d:1, c:2}
let {d,c} = obj
console.log(d,c)


//spread operator 
let arr1 = [2,5,6]
let obj1 = {...arr1}
console.log(obj1)


function sum(v1,v2,v3){
return v1 + v2 + v3; 
}

console.log(sum(...arr1));

let numberOne = [1,3,5,6]
let numberTwo = [1,3]
console.log(...numberOne, ...numberTwo);

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  console.log(myUpdatedVehicle)

  //this is not iterable only array can convert into object
//   let ob3 = {a:1, b:4}
//   let array = [...ob3]/*/*8
//   console.log(array);

const obj4 = { ...true, ..."vidhiRanaAndiamGirl", ...100 };
console.log(obj4);

// function myFunction(x, y, z) {
//     return x+y+z;
// }
// const args = [0, 1, 2];
// console.log(myFunction.apply(null, args));

function myFunction(x, y, z) {
    return [x,y,z]
}
const args = [0, 1, 2];
console.log(myFunction(...args));

const datefields = [2003,6,24]
const myDate = new Date(...datefields)
console.log(myDate)

let food = ["pizza", "burger", "pasta"]
let junkFood = ["noodles",...food, "enchiladas", "qasedilas"];
console.log(junkFood);

let f = [[1],[2],[3]];
let h = [...f];

console.log(h.shift().shift());
console.log(f);

// const obj7 = { foo: "bar", x: 42 };
// const obj2 = { bar: "baz", x: 13 };

// const mergedObj = { ...obj7, ...obj2 };
// console.log(mergedObj);


let obj5 = {
    name : "vidhi",
    company :"ABC",
    address : "xyz"
}
// console.log({...obj5, name:"priya", company: "CHG"});
console.log({name:"priya", company: "CHG", ...obj5})


//hoisting
// console.log(sum(2,3))
// function sum(a,b){
// return a+b;
// }

// console.log(a1);
// var a1= 5;//declartion hoisted on the top but initialization is not
// console.log(a1);


//CLASS EXPRESSION
const Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    area() {
      return this.height * this.width;
    }
  };
  

let areaRect = new Rectangle(3,5)
console.log(areaRect.area())


//pratice question
let q = async (text) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(text)
        },2000)
    })
}

(
    async ()=>{
        let text = await q("world")
        console.log(text);
        text = await q("hello")
        console.log(text)
    }
)()

