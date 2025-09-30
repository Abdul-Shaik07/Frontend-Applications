const fun1 = () => {
    alert("Function-1")
}

// const anonymous = function(a,b) {
   
//     confirm("The value of a and b is " +(a+b))
// }
// anonymous(10,20)

const res = function(a,...b) {
    console.log("The value of a is ", a, b)
}
res(10,20,30,40)

// let var1 = (a, ...b) => {
//     document.write("The value of b is ", b)
// }
// var1(10,2,30)

function hello() {
    document.getElementById("hello").innerText="Abbu";
}
hello()

function formValidation() {
    // var res = document.getElementById("fname").value
     var res1 = document.getElementById("phoneNumber").value
    // if(res.length == 0) {
    //     // document.getElementById("msg").innerHTML="firstName should be required";
    //     document.getElementById("fname").style.border="2px solid red";
    //     return false;
    // } else if(res.length < 8) {
    //     document.getElementById("fname").style.border="2px solid red";
    //     document.getElementById("msg").innerHTML="firstName should have minimum 8 characters";
    //     return false;
    // }

    
    var t = /^[6-9]{1}[0-9]{9}$/.test(res1) 
    if(t == false) {
        document.getElementById("msg1").innerHTML="Invalid Pattern"
        return false    
    } 
}


function animate() {
    var c = document.getElementById("circle")
    var c1 = 0;
    var id = setInterval(Animate, 5)
    function Animate() {
        if(c1 == 300) {
            clearInterval(id)
        } else {
            c1++
            c.style.top = c1+"px"
            c.style.left = c1+"px"

        }
    }
}
