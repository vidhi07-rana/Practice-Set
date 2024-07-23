//string 
// const announcement : string = "Hello World!";
// const lowerCaseAnnouncement = announcement.toLocaleLowerCase();
// console.log(lowerCaseAnnouncement);
//number
var userId = 3344499;
var userId1 = 3344499.432;
//boolean 
var yourfromahmedabad = false;
//any 
var hero;
function greetHero() {
    return "iron man";
}
hero = greetHero();
console.log(hero);
function add(num) {
    return num + 2;
}
console.log(add(3));
function valToUpper(val) {
    return val.toUpperCase();
}
console.log(valToUpper("hello there"));
//multiple parameter in ts
// function signUp(name:string , email:string, isPaid:boolean){
//     return `${name} has email ${email} and if get salary ${isPaid}`
// }
// console.log(signUp("vidhi", "vidhi@gmail.com", false))
//unable the type 
function signUp(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    if (isPaid === void 0) {
        isPaid = false;
    }
    return "".concat(name, " has email ").concat(email, " and if paid ").concat(isPaid);
}
console.log(signUp("vidhi", "vidhi@gmail.com", true));
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
var heros = ["thor", "spider man", "iron man"];
//  const heros = [1, 2,3];
var a = heros.map(function (hero) {
    return "the hero is ".concat(hero);
});
console.log(a);
//void
function consoleError(erromassage) {
    console.log(erromassage);
}
function errorHamdle(msg) {
    throw new Error(msg);
}
//object
function userDetail() {
    return { name: "test", price: 567 };
}
function userDetail1(fn) {
    return "".concat(fn.name, "'s email id is ").concat(fn.email, " and isactive at work today ").concat(fn.isActive);
}
console.log(userDetail1({ name: 'test', email: "test@gmail.com", isActive: false }));
var userIntro = {
    _id: 123,
    name: "vidhi",
    email: "vidhI@gmaill.com",
    isActive: false
};
userIntro.email = "test@gmail.com";
// userIntro._id = 34728492 //error because in the type object it mention readonly
console.log(userIntro);
function cardDetailsFunction(fn) {
    console.log("".concat(fn.cardDate, ", ").concat(fn.cardNumber, ", ").concat(fn.cvv));
}
cardDetailsFunction({ cardNumber: 56839738, cardDate: "22/07/2024", cvv: 233 });
function coordinates(pt) {
    console.log("the coordinate value of side x is " + pt.x);
    console.log("the coordinate value of side y is " + pt.y);
}
coordinates({ x: 2, y: 4 });
//Array 
var superHero = [];
var herospower = [];
superHero.push("Ironman");
console.log(superHero);
var allowPerson = []; //say its person object type 
allowPerson.push({ name: "", email: "", isActive: false });
console.log(allowPerson);
//2 diemension array
var dimension = [
    [1, 2, 3], [1, 2, 3]
];
console.log(dimension);
//union 
var score = 34;
score = 23;
score = "";
var namisha = {
    UserName: "namisha",
    id: 123344
};
console.log(namisha);
function idOrString(id) {
    console.log("the id will be ".concat(id));
}
idOrString(400344);
idOrString("hello there");
var pikachu = ["1", 3, true];
var settleAllotment; //only this type
settleAllotment = "aisle";
// settleAllotment = "crew"//this will give error
console.log(settleAllotment);
var x = ["a", "b", "c"];
console.log(x.join(" and "));
var prop = [];
//tuple 
var inFo;
var personName = [940, "text@gmail"];
personName[1] = "exasmple.com";
console.log(personName);
//enums
var seatChoose;
(function (seatChoose) {
    seatChoose[seatChoose["AISLE"] = 12] = "AISLE";
    seatChoose[seatChoose["MIDDLE"] = 34] = "MIDDLE";
    seatChoose[seatChoose["WIMDOW"] = 32] = "WIMDOW";
    seatChoose[seatChoose["FOURTH"] = 45] = "FOURTH";
})(seatChoose || (seatChoose = {}));
var seatAllow = seatChoose.AISLE;
console.log(seatAllow);
//enums example
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "test",
    email: "test@gmail.com",
    password: "euwiur",
    role: Roles.user
};
var user2 = {
    name: "test1",
    email: "test1@gmail.com",
    password: "gjtrjoird",
    role: Roles.admin
};
var isAdmin = function (user) {
    // const { name, role } = user;
    return user.role === Roles.admin ? "".concat(user.name, " can make changes on the website") : "".concat(user.name, " cannot make changes on the website");
};
console.log(user1, user2);
console.log(isAdmin(user1));
console.log(isAdmin(user2));
var Team1 = {
    mgdbId: 23,
    userInTime: "9:00",
    userOutTime: "6:30",
    setTask: function () {
        return "";
    }
};
console.log(Team1);
var cake = {
    name: "Black Forest",
    price: 550,
    quantity: 4,
    deliveryNo: 289
};
console.log(cake);
var calculateTotalPrice = function (prod) {
    return prod.price * prod.quantity;
};
console.log(calculateTotalPrice(cake));
var Team2 = {
    mgdbId: 23,
    userInTime: "9:00",
    userOutTime: "6:30",
    role: "admin",
    setTask: function () {
        return "";
    }
};
console.log(Team2);
//class
var User = /** @class */ (function () {
    function User(name, email) {
        this.city = "anand";
        this.name = name;
        this.email = email;
    }
    return User;
}());
var empolyee = new User("Mr.box", "box@gmail.com");
console.log(empolyee);
console.log(empolyee.city);
// class Person1{
// name : string ="Voza";
// Age : number= 21;
// hobbies : string[]= ["reading", "singing"];
// }
var Person1 = /** @class */ (function () {
    function Person1(name, Age, hobbies) {
        this.name = name;
        this.Age = Age;
        this.hobbies = hobbies;
    }
    return Person1;
}());
// const per : Person1 = new Person1( );
var per = new Person1("Voza", 23, ["reading", "singing"]);
console.log(per);
var Delivery = /** @class */ (function () {
    function Delivery(productType, time) {
        this.productType = productType;
        this.time = time;
    }
    return Delivery;
}());
var del = new Delivery("pen", "5 Days");
console.log(del);
