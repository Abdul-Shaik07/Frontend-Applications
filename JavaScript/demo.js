/*a = 2
let b = "Abdul";
const c = true
var d
console.log(a + "->" + typeof(a))
console.log(b + "->" + typeof(b))
console.log(c + "->" + typeof(c))
console.log(d + "->" + typeof(d))*/

/*
for(var i=10;i>=1;i--)
{
    console.log(i + "->" + typeof(i))
}
*/

/*for(var i=1;i<=5;i++){
    for(var j=1;j<=5;j++){
        console.log("*")
    }
    console.log()
}

const stars = 5
var b = "*".repeat(stars)
console.log(b)
*/

/*
function para(a, b)
{
    console.log("hello")
    return parseFloat(a) + parseFloat(b)
}
console.log(para("10", "2"))
*/

/*
function rest_parameterized(a,...b){
    return a
}
console.log(rest_parameterized(1,2,3,4,5,6)) 

*/

/*
function fun(a, ...b){
    return function(){
        return b + "JavaScript"
    }
}
var f = fun(1,4,5,6,7,8)
console.log(f())
*/

/*
var varname = function(a){
    for(var i=1;i<=a;i++)
        console.log(i)

    return "Anonymous Function"
}
console.log(varname(10))
*/

/*
function display(a){
    return a
}
var x = display(function(){
    return 5
})
console.log(x())
*/

/*
var fun = (a) => a
var x = fun(() => "js")
console.log(fun(5))
console.log(x())
*/

/*class School
{
    name = 'Abdul';
    age = 23
    sex = 'M'
}

var school = new School()
console.log(school.age)
*/

/*
var school = {
    "name": "Abdul",
    "age" : 23
}
school.name = "Abbu"
console.log(school)
*/

/*
var x = "Abdul"
var y = x.split('').reverse().join("")
console.log(y)
*/

/*
var list = [1,2,3,4]
list.push(2,3)
console.log(list)
console.log(list.pop())
console.log(list)
list.unshift(0,0)
console.log(list)
console.log(list.shift())
*/

/*
function countVowels(str){
    var count = 0;
    for(var i of str)
    {
        if(i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u' )
        {
            count++;
        }
    }
     return count;
}
console.log(countVowels("abdul"));
*/

/*
var countofVowels = (str, count) => {
    
    for(var char of str)
    {
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
            count++;
    }
    return count; 
}
console.log(countofVowels("abdul", 0))
*/

/*
let arr = ["hyderabad", "bangalore"]
arr.forEach((val) => {console.log(val.substring(2,3), val.toUpperCase())})
*/

/*
let arr = [1,2,3,4]
arr.forEach((val) => {console.log(val*val)})
*/

/*
//creates a new array and it stores in false or true
let arr = [1,2,2,4,5,6]
let equal = arr.map((val) => {return val > 2;});
console.log(equal)
*/


/*
//creates a new array and it stores in values
let arr = [1,2,2,4,5,6]
let equal = arr.filter((val) => {return val == 2;});
console.log(equal)
*/

/*
let arr = [1,2,2,4,5,6]
let add = arr.reduce((previous, current) => { return previous > current ? previous : current});
console.log(add)
*/

/*
let arr = [23,67,45,90,45,99,34]
let marks = arr.filter((val) => {return val > 90});
console.log(marks)
*/

/*
let arr = []
for(let i=1;i<=5;i++)
{
    arr[i-1] = i
}
console.log(arr)

let sum = arr.reduce((prev, curr) => {return prev + curr;});
console.log("The sum of all the array number is ", sum)

let prod = arr.reduce((prev, curr) => {return prev * curr;});
console.log("Product of all the array is", prod)
*/

/*
let productOfNumber = (product) =>{for(let i=1;i<=10;i++) {product = product * i;} return product;}
console.log(productOfNumber(1))
*/

/*
let reverse = (str) => {return str.split('').reverse().join("")}
console.log(reverse("Java"))
*/

var a = 3;
var a = 2;
console.log(a, typeof(a))