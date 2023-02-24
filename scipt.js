/*question 1 */
let heading = document.querySelector("#heading");
let btnadd = document.querySelector("#btn_add")
let btnback = document.getElementById("btn_back")
btnback.style.display = "none"

btnadd.addEventListener("click", function () {
    heading.innerHTML = "MERN Stack"
    heading.style.color = "red"
    btnback.style.display = "block"
})

btnback.addEventListener("click", function () {
    btnback.style.display = "none"
    heading.innerHTML = ""
    heading.style.color = ""
})
/*question 2 */
let a=document.getElementsByTagName("h1")
let btn_chg=document.getElementById("btn_chg")
btn_chg.addEventListener("click",function(){
    a[1].innerHTML="prepbytes"
})


/* question 3 */
let time = document.querySelector("#time");
time.style.display = "none"

document.querySelector("#btn_time").addEventListener("click", function () {
    time.style.display = "block"
    time.style.color = "purple"
    btnback1.style.display = "block"
})

let btnback1 = document.getElementById("btn_back1")
btnback1.style.display = "none"

btnback1.addEventListener("click", function () {
    time.style.display = "none"
    btnback1.style.display = "none"

})

function clock() {
    var c = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML = c;

}
var second = 1000;
setInterval(clock, second)

/*question4 */

let text = document.getElementById("text");
let replacebtn = document.getElementById("btn_rep")
text.style.color = "brown"


replacebtn.addEventListener("click", function () {
    text.innerText = "Welcome To Elevation academy";
    text.style.color = "blue";
    btnback2.style.display = "block"

})

let btnback2 = document.getElementById("btn_back2");
btnback2.style.display = "none"

btnback2.addEventListener("click",function(){
    text.innerText = "Hello World";
    text.style.color = "brown";
    btnback2.style.display = "none"

})

/*question5 */
let text1=document.getElementById("text1");
let btnhide=document.getElementById("btn_hide");

btnhide.addEventListener("click",function(){
    text1.innerHTML=""
})
