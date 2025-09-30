let a = document.querySelector("ul")
console.dir(a)


let heading = document.querySelector("h2");
console.dir(heading)
heading.innerText = heading.innerText + " from apna college students"
console.log(heading.innerText)

let div = document.querySelectorAll(".one");
let index = 0
for(divs of div)
{
    divs.innerText = `box number is ${index}`;
    console.log(divs)
    index++;
}

// div[1].innerText="2nd Box"
// div[0].innerHTML="<li>boxes</li>"
// div[2].innerText = "last-Box"
// console.log(div)

let box = document.querySelector("h2");
console.log(box.getAttribute("class"));

let box1 = document.querySelector(".mercedez");
console.log(box1.setAttribute("class", "volvo"));

let box2 = document.querySelector("#box");
box2.style.backgroundColor = "blue";

box2.innerText = box2.innerText + " Box 2";

let lap = document.createElement("button");
lap.innerText="submit";

box2.prepend(lap)


let list = document.querySelector("ul");
list.innerHTML="<h3><i><b>Hello, World!</b></i></h3>"
list.style.border="2px solid black"
list.style.backgroundColor="yellow"


let para = document.createElement("p");
para.innerText = "My name is Abdul Shaik";

list.prepend(para);

para.style.color="blue";


let button = document.createElement("button");
button.innerText = "Click me";
button.style.backgroundColor = "red";
button.style.color = "white";

let body = document.querySelector("body");
body.prepend(button);

let modify = document.querySelector(".hello");
modify.setAttribute("class", "myClass");


let x = document.getElementsByTagName("p")[0].innerText="Good days will come, but need a patience";
console.log(x)

let btn = document.querySelector(".btn");
btn.style.backgroundColor="yellow";
btn.innerText="submit";
btn.addEventListener("dblclick", () =>{console.log("done")})

let btn1 = document.querySelector(".button").innerText="click me!"
let body1 = document.querySelector("body");
let currentMode = "light";
btn1.addEventListener("click", () => {
    if(currentMode == "light") {
        currentMode = "dark";
        body1.style.backgroundColor="black";
    }
    else {
        currentMode = "light";
        body1.style.backgroundColor = "light";
    }
    console.log(currentMode)
});

