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


async function harry(){
    
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
    let a = await harry();
    console.log(a)
    let b = await cherry();

}

main1();


