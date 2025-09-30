// let button = document.querySelector(".btn");
// button.style.backgroundColor="red";
// button.innerText="Submit";

//button.onclick = () => {console.log("data stored")}
//button.ondblclick = () => {console.log("done")}
// button.onmouseover = () => {console.log("you are in button")}
    
let button = () =>{document.querySelector(".btn").innerText="submit";
                   console.log("stored");
}

let counter = (count = 0) => {
    document.querySelector(".counter");
    if(count > 0) {
        count++;
    }
    document.writeln(count)
}

let button1 = () =>{document.querySelector(".btn");
                    console.log("you clicked 2x");
}

let button2 = () =>{document.querySelector(".btn");
                    console.log("You are in the submit");
}


let btn = document.querySelector(".mode").innerText = "Change Mode";
let body = document.querySelector("body");
let currentMode = "light";
let mode = btn.addEventListener("click", () => {
    if(currentMode == "light"){
        currentMode = "dark";
        body.style.backgroundColor="dark";
    }
    else{
        currentMode="dark";
        body.style.backgroundColor="light";
    }
    console.log(currentMode);
    });




let buttons = () => {
            document.querySelector(".button");
            console.log("you clicked submit button")
            document.writeln("<p> you clicked submit button</p>")
        }