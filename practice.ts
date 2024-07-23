

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

const user1 = {
    name : "test",
    email : "test@gmail.com",
    password : "euwiur",
    role: Roles.user
}

const user2 = {
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



