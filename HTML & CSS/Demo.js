const names = ["Abbu", "Abdul", "Shaik"]

// for(let i = 0; i <= names.length-1; i++) {
//     console.log(names[i])
// }


names.map((name) => {
    if(name != "Abbu") {
        console.log("Yes")
    }else{
        console.log("No")
    }
})
console.log('========================')

names.filter((name) => {
    var n = name == "Abdul" ? 1 : 0
    console.log(n)
})

console.log('========================')

const numbers =[1,2,3,4,5,6,7,8,9,10]
const evenNumbers = []
// numbers.map((n) => {
//     console.log(n)
// })

numbers.forEach((n) => {
    console.log(n)
})

console.log('========================')

const filteredNumbers = numbers.filter((n) => {
    n % 2 == 0
    n = evenNumbers
})
console.log(filteredNumbers)
console.log(evenNumbers)