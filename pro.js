// import {summation , sub} from './cal.js'
// import {summation as add , sub} from './cal.js'
// import * as calc from './cal.js'
import {whoiami} from './module/whoiami.js'
//with Namespace
import * as combine from './module/whoiami.js'
// import { sayHii, sayHola } from './greetings.js'
// console.log(add(2,4));
// console.log(sub(4,2))

// console.log(calc.summation(2,4));
// console.log(calc.sub(4,2))

// console.log(combine.calc.summation(3,3))
// whoiami("vidhi");

//use anywhere in the program insteadm of the top
// const {sayHii, sayHola} = await import('./greetings.js') //as it return promise


const promise = Promise.all([await  import('./greetings.js'), await import('./cal.js')]);

console.log(promise);

// promise.then((value)=>{return value[0].sayHii()})
promise.then((value)=>{ console.log( value[1].summation(5,5))})


// sayHii();

// sayHola();