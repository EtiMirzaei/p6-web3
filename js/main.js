// let retangle = {
//   x: null,
//   y: null,
//   area() {
//     return this.x * this.y;
//   },
//   env() {
//     return (this.x + this.y) * 2;
//   },
// };
// retangle.x = +prompt("x?");
// retangle.y = +prompt("y?");

// document.write(
//   `<h1>area is ${retangle.area()} and envirment is ${retangle.env()} </h1>`
// );

// let div = document.getElementById("big")

//  div.style.backgroundColor="red"
// div.classList.add("active")


// let divs = document.getElementsByClassName("active")
// divsArray=[...divs]
// divsArray.forEach((item) => {
//   item.classlist.add("test")
// })


// let divs = document.getElementsByClassName("active")
// divsArray = [...divs]
// divsArray.foreach((item, index)=>{
//  if(index===2){
//   item.classlist.add("test")
  
  
//  }
// })
// console.log(item);


//setTimeout
// let btnStart = document.querySelector("#start")
// let btnStop = document.querySelector("#stop")
// let result = document.querySelector("#result")

// btnStart.addEventListener("click", function(){
//     setTimeout(()=>{
//         alert ("hi ali")
//     },2000)
// })


//setInterval
// let btnStart = document.querySelector("#start")
// let btnStop = document.querySelector("#stop")
// let resetBtn = document.querySelector("#reset")
// let result = document.querySelector("#result")

// btnStart.addEventListener("click", function(){
//     stopMe=setInterval(()=>{
//         result.innerHTML += (`<h1>hi ali</h1>`)
//     },1000)
//     result.innerHTML += (`<h1>hi ali</h1>`)
// })
// btnStop.addEventListener("click", function(){
//     clearInterval(stopMe)
// })

// reset.addEventListener ("click", function(){
//       clearInterval(stopMe)
//   result.innerHTML = (``)
// })

//practice6-web3


    let firstBox = document.getElementById("first")
    firstBox.style.border = '3px solid yellow';
    firstBox.style.color = 'white';


    let divs =document.getElementsByTagName("div")
    let divArray = [...divs]
    divArray.forEach((item , index)=>{
        if (index===0){
            item.classList.add("active")
        }
    })


     let pBoxs =document.getElementsByClassName("pBox")
    let pBoxArray = [...pBoxs]
    pBoxArray.forEach((ele , index)=>{
        if (index===0){
            ele.style.border= '3px dotted green'
        }
    }) 

    let query = document.querySelector("#last")
    console.log(last);
    last.style.color = '#210696ff'


    let allBoxs = document.querySelectorAll(".box")
    allBoxs.forEach((element)=>{
      element.style.backgroundColor = '#929292ff'
    })

    




 