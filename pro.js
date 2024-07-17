// import {summation , sub} from './cal.js'
// import {summation as add , sub} from './cal.js'
import * as calc from './cal.js'
import {whoiami} from './module/whoiami.js'
//with Namespace
import * as combine from './module/whoiami.js'

// console.log(add(2,4));
// console.log(sub(4,2))

console.log(calc.summation(2,4));
console.log(calc.sub(4,2))

console.log(combine.calc.summation(3,3))
whoiami("vidhi");