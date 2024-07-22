// let object = {
//     name :"vidhi",
//     age :22
// }

// // let email = object.email// it will give you error at the writing time
// console.log(object.age)

//string 
const announcement : string = "Hello World!";
const lowerCaseAnnouncement = announcement.toLocaleLowerCase();
console.log(lowerCaseAnnouncement);

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


export {}

