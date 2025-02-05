

//string 
// const announcement : string = "Hello World!";
// const lowerCaseAnnouncement = announcement.toLocaleLowerCase();
// console.log(lowerCaseAnnouncement);

//number

const userId: number= 3344499;
const userId1: number= 3344499.432;


//boolean 

const yourfromahmedabad : boolean = false;

//any 

let hero:any;

function greetHero(){
    return "iron man"
}

hero = greetHero();
console.log(hero);


function add(num: number):number{
    return num + 2;
}

console.log(add(3))

function valToUpper(val: string){
    return val.toUpperCase()
}
console.log(valToUpper("hello there"));

//multiple parameter in ts

// function signUp(name:string , email:string, isPaid:boolean){
//     return `${name} has email ${email} and if get salary ${isPaid}`
// }
// console.log(signUp("vidhi", "vidhi@gmail.com", false))


//unable the type 
function signUp(name:string , email:string, isPaid:boolean=false){
    if(isPaid === void 0){
        isPaid = false
    }
    return `${name} has email ${email} and if paid ${isPaid}`

}

console.log(signUp("vidhi", "vidhi@gmail.com",true))

// //funtion can return 2 types then what to do?

// function val(num:number){
//     if( num >10){
//         return true ;

//     }
//     return "the number is not valid"
// }

//arrow function 

// const getString = (s: string):string =>{
//     return ""
// }

//no any particular type, which can take any type
const heros = ["thor", "spider man", "iron man"];

//  const heros = [1, 2,3];


const a = heros.map((hero) : string =>{

   return `the hero is ${hero}`
});

console.log(a);

//void

function consoleError(erromassage:string):void{
console.log(erromassage)
}

function errorHamdle(msg:string): never{
    throw new Error(msg)
}


//object
function userDetail( ):{name : string, price:number}{
return {name : "test", price: 567}


}

// type DescribableFunction = {
//     description: string;
//     (someArg: number): boolean;
//   };
//   function doSomething(fn: DescribableFunction) {
//     console.log(fn.description + " returned " + fn(6));
// }

type userInfo = {
    name : string,
    email :string,
    isActive : boolean
}

function userDetail1(fn : userInfo){
return `${fn.name}'s email id is ${fn.email} and isactive at work today ${fn.isActive}`;
}

console.log(userDetail1({name : 'test', email:"test@gmail.com", isActive: false})
)

type user = {
    readonly _id :number
    name : string,
    email :string,
    isActive : boolean
    creditCardDetails? : number //to make it optional
}

const userIntro : user ={
    _id :123,
    name:"vidhi",
    email:"vidhI@gmaill.com",
    isActive :false

}

userIntro.email = "test@gmail.com";
// userIntro._id = 34728492 //error because in the type object it mention readonly


console.log(userIntro);

type cardNumber = {
    cardNumber: number;
};

type cardDate = {
    cardDate: string;
};

type cardDetails = cardNumber & cardDate & {
    cvv: number;
};

function cardDetailsFunction(fn: cardDetails): void {
    console.log(`${fn.cardDate}, ${fn.cardNumber}, ${fn.cvv}`);
}

cardDetailsFunction({ cardNumber: 56839738, cardDate: "22/07/2024", cvv: 233 });


//type aliases

type coordinate = {
    x : number,
    y : number 
}

function coordinates(pt: coordinate){
    console.log("the coordinate value of side x is " + pt.x);
    console.log("the coordinate value of side y is " + pt.y);

}

coordinates({x : 2, y:4});

//Array 

const superHero : string[] = []
const herospower : Array<string>= [];

superHero.push("Ironman");
console.log(superHero);

type Person = {
    name : string ,
    email : string,
    isActive: boolean
}

const allowPerson : Person[]= [];//say its person object type 

allowPerson.push({ name :  "", email : "",isActive: false})
 console.log(allowPerson)

 //2 diemension array

 const dimension : number[][] = [
    [1,2,3],[1,2,3]
 ];
 console.log(dimension)

 //union 

 let score : number | string =34

 score = 23;
 score = ""


 // objedct as type 

 type user1 = {
 name : string ;
 id : number 
 }

 type admini = {
    UserName : string ;
    id : number 
    }
let namisha : user1 | admini = {
    UserName:"namisha",
    id : 123344
};
console.log(namisha);  

function idOrString(id : number | string){
    console.log(`the id will be ${id}`);
}
idOrString(400344);
idOrString("hello there");

let pikachu : (number | string | boolean)[] = ["1",3,true]


let settleAllotment : "aisle" | "middle" | "widow";//only this type

settleAllotment = "aisle"
// settleAllotment = "crew"//this will give error
console.log(settleAllotment)

let x : string[]= ["a","b","c"];
console.log( x.join(" and "));

let prop : (string | number)[]=[];

//tuple 
let inFo: [string, number,boolean];

// inFo = ["user", 234, false];
// console.log(inFo);

type person = [number , string]

const personName : person = [940, "text@gmail"]
personName[1]="exasmple.com"
console.log(personName);

//enums
enum seatChoose  {
    AISLE = 12,
    MIDDLE = 34,
    WIMDOW = 32,
    FOURTH= 45
}

const seatAllow = seatChoose.AISLE
console.log(seatAllow)

//enums example
enum Roles {
    user = "user",
    admin = "admin"
}

type LoginUser = {
name :string ;
email: string ;
password : string ;
role : Roles

}

const user1:LoginUser = {
    name : "test",
    email : "test@gmail.com",
    password : "euwiur",
    role: Roles.user
}

const user2:LoginUser = {
    name : "test1",
    email : "test1@gmail.com",
    password : "gjtrjoird",
    role: Roles.admin
}

const isAdmin = (user: LoginUser) => {
    // const { name, role } = user;
    return user.role === Roles.admin ? `${user.name} can make changes on the website` : `${user.name} cannot make changes on the website`;
}
console.log(user1,user2)
console.log(isAdmin(user1)); 
console.log(isAdmin(user2));

//interface
interface userId {
    readonly mgdbId : number;
    userInTime : string ;
    userOutTime:string;
    task? : string
    setTask():string
    
}


let Team1: userId = {
    mgdbId: 23,
    userInTime: "9:00",
    userOutTime: "6:30",
    setTask: () => {
        return "";
    }
}
console.log(Team1)

//example
interface product {
    name: string;
    price : number ;
    quantity : number 
}

// let cake : product ={
//     name:"Black Forest",
//     price : 550,
//     quantity : 4

// }

interface product {
    deliveryNo:number 
}
let cake : product ={
    name:"Black Forest",
    price : 550,
    quantity : 4,
    deliveryNo : 289
}
console.log(cake);

const calculateTotalPrice= (prod :product )=>{
    return prod.price * prod.quantity
}
console.log(calculateTotalPrice(cake))

//inheritance with interface 

interface admin extends userId{
    role : "admin" | "none" 
}
let Team2: admin = {
    mgdbId: 23,
    userInTime: "9:00",
    userOutTime: "6:30",
    role:"admin",
    setTask: () => {
        return "";
    }
}
console.log(Team2)


//class

class User {
    name : string ;
    email : string
    city :string = "anand"
    constructor(name :string , email: string){
        this.name = name ;
        this.email = email;

    }
}

const empolyee = new User("Mr.box","box@gmail.com");
console.log(empolyee)
console.log(empolyee.city)

// class Person1{
// name : string ="Voza";
// Age : number= 21;
// hobbies : string[]= ["reading", "singing"];
// }


// class Person1{
// name : string ;
// Age : number;
// hobbies : string[];
// constructor(name:string,Age:number, hobbies:string[]){
//     this.name = name;
//     this.Age = Age;
//     this.hobbies = hobbies

// }
// }




// // const per : Person1 = new Person1( );
// const per : Person1 = new Person1("Voza", 23,["reading", "singing"] );
// console.log(per);

class Delivery {
    constructor(public productType: string , public time :  string){
    }
}
const del = new Delivery("pen", "5 Days")
console.log(del);



class Person1 {
    private _age!: number;

    constructor(public name: string, public hobbies: string[]) {}

    introduceMe(): string {
        return `My name is ${this.name} and my age is ${this.age} and my hobbies are ${this.hobbies.join(", ")}`;
    }

    public set age(age: number) {
        if (age > 100 || age < 0) {
            throw new Error("Age is not valid");
        }
        this._age = age;
    }

    public get age(): number {
        return this._age;
    }
}

const per: Person1 = new Person1("Voza", ["reading", "singing"]);



// Setting a valid age
try {
    per.age =  130; // This should be fine
    console.log(per.introduceMe()); // Output: My name is Voza and my age is 30 and my hobbies are reading, singing
} catch (e) {
    if (e instanceof Error) {
        console.error(e.message);
    } else {
        console.error('An unexpected error occurred.');
    }
}


//interface class example

interface TakePhoto {
    cameraMode : string;
    filter :string;
    burst:number
}

interface Story{
    createStory():void
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string ,
        public burst : number,
        public short :string
    ){
    }
}


const insta = new Instagram("Manual","vivid",3,"playful");
console.log(insta);

class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode : string,
        public filter : string ,
        public burst : number,
        public short :string
    ){
    }
    createStory():void{
        console.log("HERE CREATE YOUR STORY!!!")
    }
}

const utube = new Youtube("Manual","vivid",3,"playful")
utube.createStory();


// function logANDreturn(value1: number | string ): number | string{
//     console.log(value1)
//     return value1
// }
// logANDreturn(34);


//generic
function logANDreturn<Type>(value1:Type):Type{
    console.log(value1)
    return value1
}
logANDreturn(34);
logANDreturn(true);
logANDreturn("fdrfdrs");


// interface Bootle{
//     brand : string ;
//     type : string
// }

// function fourType<T>(val : T):T{
//     return val;
// }

// fourType<Bootle>({"brand","type"})


const fun = <T>(val : T[]):T => {
    const index = 3;
    return val[index]

}


const anotherfun = <T,U extends number>(val1 : T, val2:U):object => {
   return {val1,val2}

}

anotherfun(2,6)


class Cart<T>{
    public cart :T[]=[]

  cartadd(products : T){
    return this.cart.push(products)
    }
}

function provideiD(id : string | null ){
if(!id){
    console.log("Provide the id ");
    return;
}
id.toLowerCase()

}
provideiD("");

function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") {
      return " - ".repeat(padding) + input;
    }
    return padding + input;
  }

console.log(  padLeft(3,"icon"))

function printAll(strs: string | string[] ) {
    if (typeof strs === "object") {
      for (const s of strs) {

        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } 
  }

  printAll(["write","read"]);
  

  //narrowing 

  interface User{
    name: string
    email: string 
  }

  interface Admin{
    name: string
    email: string
    isAdmin : boolean 
  }

const pihy : Admin={
    name: "EHFRW",
    email: "FMVKSDE",
    isAdmin: false
}

  function adminAccount(per : User | admin){
    if("isAdmin" in per){
        return true
    }
    return false
  }
  console.log(pihy);


//   let x1 = Math.random() < 0.5 ? 10 : "hello world!";
//   x1 = 0.2;  
//   console.log(x1);
//   x1 = "goodbye!";
//   console.log(x1);

type fish ={ swim():void};
type bird ={ fly():void};
const fi = {swim(){console.log("the fish can swim")}}

function isFish(pet : fish | bird): pet is fish{
    return (pet as fish).swim() !== undefined
}
console.log(fi)

interface Circle{
    kind : "circle"
    raduis : number
}
interface Square{
    kind : "square"
    side : number
}
interface Rectangle {
    kind : "rectangle"
    length : number ,
    width : number
}

type Shape = Circle | Square | Rectangle;

function getshape(shape:Shape  ){
 if(shape.kind === "circle"){
    return Math.PI * shape.raduis * shape.raduis
 }
 else if(shape.kind === "square") {
    return shape.side * shape.side
 }
 else if(shape.kind === "rectangle"){
    return 1/2 * shape.length * shape.width
 }
}
const circle: Circle = { kind: "circle", raduis: 5 };
const square: Square = { kind: "square", side: 5 };
const rectangle: Rectangle = { kind: "rectangle", length: 5, width:4 };



console.log(getshape(circle));  
console.log(getshape(square)); 
console.log(getshape(rectangle));  


//union type
let wgt : string | number ;

//intersections type

let weight :string & number;


type draggable ={
    drag():void
}

type resizable ={
    resize():void
}

type uiType = draggable & resizable;

// variable of uitype
let uiObject : uiType ={
    drag:()=> {},
    resize:()=>{}

}


//example 

interface Student {
    studentId : number,
    studentName : string
}

interface Teacher {
    teacherId : number,
    teacherName : string 
}

type intersection = Student & Teacher;

let classRoom : intersection ={
    studentId : 345,
    studentName : "prapti patel",
    teacherId:657,
    teacherName :"sumit Parmar"
}

console.log(classRoom.studentName)
console.log(classRoom.teacherName)


//literal type 

function combine(input1 : string | number , input2 : number | string){

let result ;

if(typeof input1 === "number" && typeof input2 === "number"){
    result = input1 + input2
  
}else {
    result = input1.toString() + input2.toString()
    
}
return result

}

// let com = combine(" local ", " region ");
let com = combine(67, 879);

console.log(com);

type metric = "centimeter" | "meter"

const m : metric = "centimeter"

function nameFun(name : string | null){
    if(name){
        console.log(name.toLocaleUpperCase());
    }else{
        console.log("Hola")
    }
}
nameFun(null);

type Direction = 'North' | 'South' | 'East' | 'West';

let move: Direction;

move = 'North'; 
move = 'South';
// move = 'Up';    

function setTrafficLight(color: 'Red' | 'Yellow' | 'Green') {
    console.log(`The traffic light is ${color}`);
  }
  
  setTrafficLight('Red');    
  setTrafficLight('Yellow'); 
  setTrafficLight('Green'); 
//   setTrafficLight('Blue');

//we can also use interface as arrays 
interface Persons{

    id : number,
    name : string
}

const persons : Persons[] =[
    {id : 1, name :"Riya"},
    {id : 2, name :"Piya"},
    {id : 3, name :"Siya"}

]

console.log(persons);

const tuples: [number, string][] = [
    [1, "apple"],
    [2, "banana"],
    [3, "cherry"]
  ];

  console.log(tuples)

  const numbers: number[] = [1, 2, 3, 4, 5];

const doubleArray=numbers.map((num) => {
return  num * 2
});

console.log(doubleArray)


let filnum :number[]=[1,2,3,4,5]

const num = filnum.filter((val : number)=>
    {return val % 2 === 0});
  
console.log(num);

//Guard type 
type alphanumeric = number | string ;

function alpdNum( a : alphanumeric , b: alphanumeric)
{
    if(typeof a === "number" && typeof b === "number"){
        return a + b;

    }

}
// console.log(alpdNum(5,5));

class Banana{
     isTasty(): boolean{
        return true
    }
}

class Apple{
    isJuicy(): boolean{
       return true
   }
}

type fruits = Banana | Apple;

function wantFruit (fruit : fruits): number{
    let price = 0;

    if(fruit instanceof Banana ){
        price = fruit.isTasty() ? 5 : 10;
    }else if(fruit instanceof Apple){
        price = fruit.isJuicy() ? 10 : 5 ;
    }
    return price;
}

const apple = new Apple();
const banana = new Banana();
console.log(wantFruit(banana))
console.log(wantFruit(apple));

//type assertion

const someString = 'string of'
const str = (someString as string).length
const str1 = (<string>someString).length
console.log(str1);
console.log(str);


const stringNum = (a: number, b : number , c : "add" | "concat"): number | string=>{
if(c === "add"){
    return a + b;
}
return ' ' + a + b;
}


console.log(stringNum(4,3,"add"));

// const q =(10 as unknown) as string

// console.log(typeof q)



type Person2 = {
    name: string;
    age: number;
    address: string;
  };
  
  type PartialPerson = {
    [P in keyof Person2]?: Person2[P];
  };
  
let data : unknown= "string";
data = 20

let item : any= "string";
item = 20

type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Func = (a: number, b: number) => string;

type ReturnTypeOfFunc = GetReturnType<Func>; 

const unkn: ReturnTypeOfFunc = "This is a string"; 


// Step 2: Assign a function to a variable of type Func
const unkn1: Func = (a: number, b: number): string => {
    return `The numbers are ${a} and ${b}`;
};

// Using the function
console.log(unkn1(45, 56)); // Output: The numbers are 45 and 56

console.log(unkn)
