
// const object= {

//     harry:20,
//     priya:40,
//     rudra:70

// }
// for(let a in object){

//     console.log(object[a])
// }

function fact(n) {
    if (n < 0) {
        console.log("The number is not valid");
    } else if (n === 0) {
        console.log("The factorial of 0 is 1");
    } else {
        let fac = 1; 
        for (let i = 1; i <= n; i++) {
            fac *= i;
        }
        console.log("The factorial of " + n + " is " + fac);
        return fac; 
    }
}


fact(4);



let nae = "                    vidhi               ";
console.log(nae.trimEnd());
const num1 = [2,34,5,3,5]
// for(let i=0; i<num.length;i++){
//     console.log(num[i])
// }

num1.forEach((element)=>{
    console.log(element*element);
})


const arr = [1,2,3,4];
const a1 = arr.reduce((h1,h2)=>{
return h1 + h2;
});
console.log(a1);





const num = [2,34,5,3,5]
// for(let i=0; i<num.length;i++){
//     console.log(num[i])
// }

// num.forEach((element)=>{
//     console.log(element*element);
// })


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


async function marry(){
    
let delhiWeather = new Promise((resolve, reject)=>{
    setTimeout(()=>{ resolve("21 Deg")
        console.log("the delhi has 21 deg");}, 7000);
   
})
 
let bangloreWeather = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("the delhi has 27 deg")
        resolve("27 Deg")
    },10000);
})
let a =prompt("weather Information?")
console.log(a)
 let delhiW = await delhiWeather;
 let bangLOREW = await bangloreWeather;
 return [delhiW, bangLOREW];


}

async function cherry(){
    console.log("Hello now u are in cherry function");
}

const main1 = async ()=>{
    let a = await marry();
    console.log(a)
    let b = await cherry();

}

main1();


