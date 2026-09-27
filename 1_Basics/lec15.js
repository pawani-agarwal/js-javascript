const marvel = ["thor","spiderman","batman"]

const cartoon = ["shinchan","doraemon","motu patlu"]

//marvel.push(cartoon)
//console.log(marvel[3][2])

const newarr = marvel.concat(cartoon)
console.log(newarr)

const allshow = [...marvel,...cartoon]
console.log(allshow)

const arayyy = [23,78,[3,7,4,[54,242,32],56],89,32]
console.log(arayyy.flat(Infinity))

console.log(Array.isArray("Pawani"))
console.log(Array.from("Pawani"))
console.log(Array.from({name:"Pawani"})) //interesting

let a1 = 100
let a2 = 400
let a3 = 800
console.log(Array.of(a1,a2,a3))