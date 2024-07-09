
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


let a = prompt("Enter the note here");

localStorage.setItem("note", a);

let c = confirm("Do yoiu wanna delete the note")
if(c){
    localStorage.removeItem("note")
    alert("Note is deleted successfully");
}


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
