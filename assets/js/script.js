// console.log(document);

// let heads =document.getElementsByTagName("h2");

// for (const item of heads ) {

//     console.log(item);
// }


// let head = document.getElementsByClassName("test")

// console.log(head);

// let head = document.getElementById("test")
// console.log(head);

// let head = document.querySelector(".test")
// let heads = document.querySelectorAll("#test")

//console.log(heads);

// for (const item of heads) {
//     console.log(item);
// }

// console.log(document.querySelector("#list-news .test ul "));

//let elem = document.querySelector(".test");

// console.log(elem);

// elem.className = "Salamlar";

    // elem.classList.add("salam")


    // if(elem.classList.contains("test1")){
    //     elem.classList.remove("test1")
    // }else{
    //     console.log("yoxdur");
    // }


// let span = document.querySelector("#list-news .small-text")

// console.log(span.innerText);
// console.log(span.innerHTML);

// span.innerText = "Salam millet"
// span.innerHTML = "<b> Salam millet </b>"

//let addBtn = document.querySelector(".add-btn");

// console.log(addBtn);

// function clickBtn() {
//     alert("Salam millet")
//}


//addBtn.onclick = function() {
    // console.log("olundu");
    // clickBtn();
//}

// addBtn.onclick = function(){
//     alert("Added")
// }

// addBtn.onclick = function(){
//     alert("Salam")
// }

// function test(){
//     console.log("Salamlar");
// }

// addBtn.addEventListener("click",test)

// addBtn.addEventListener("click",function(){
//     alert("Salamlar");
// })

// addBtn.addEventListener("click",function(){
//     alert("Sagollar")
// })
// let addBtn = document.querySelector(".add-btn");

// let removeBtn = document.querySelector(".remove-btn")

// let text = document.querySelector(".text-area");

// let head = document.querySelector("h1")


// addBtn.addEventListener("click",function() {
// head.innerText = text.value;
// if(text.value == ""){
//     alert("Bosh buraxma");
//     return;
// }
// if(head.classList.contains("active-head")){
//     head.classList.remove("active-head")
//     head.classList.add("inactive-head")
// }
// text.value = "";
// })


// removeBtn.addEventListener("click",function() {
//     head.innerText = text.value;
//     if(text.value == ""){
//         alert("Bosh buraxma");
//         return;
//     }
   
//     if(head.classList.contains("inactive-head")){
//         head.classList.remove("inactive-head")
//         head.classList.add("active-head")
//     }
//     text.value = "";
    
//     })
   

// let addBtn = document.querySelector(".add-btn");

// let removeBtn = document.querySelector(".remove-btn");

// let text = document.querySelector(".text-area");

// let head = document.querySelector("h1")

// let ul= document.querySelector(".list-area")

//  addBtn.addEventListener("click",function(){
//     if(text.value == ""){
//      alert("Bosh buraxma");
//      return;
//     }
//       // ul.innerHTML +=   `<li class="list-group-item">${text.value}</li>`
      
//     let li = document.createElement("li");
//     let icon = document.createElement("i")

//         li.classList.add("list-group-item");
//         li.style.border = "2px solid red";
//         li.style.backgroundColor = "blue";
//         li.style.color = "white";
//         li.innerText= text.value;




//         icon.classList.add("fa-solid");
//         icon.classList.add("fa-circle-xmark")
//         ul.append(li);
//         li.append(icon);

//         icon.classList.add("icon");
      
//         icon.onclick = function() {
//             li.remove()
//         }



//       text.value = "";

      //<i class="fa-solid fa-circle-xmark"></i>
  
 //})

//  window.addEventListener(`load`,(event) => {
//     alert("Eminsinizmi")
//  });



//Ashagida elave etdiyim kimi bir dizayn duzeltmek.  Reqem qebul eden inputlar olacaq, hansi buttona click etsek hemin operatora gore hesablayib en sondaki inputa cavabi yazdirmaq.

let addBtn = document.querySelector(".add-btn");

let number = document.querySelector(".number-area");

let number1 = document.querySelector(".number-area2")

let sum1 = document.querySelector(".sum"); 

let decrease1 = document.querySelector(".decrease");

let multiply1 = document.querySelector(".multiply");

let divide1 = document.querySelector(".divide");

let text = document.querySelector(".text-area");

let result = document.querySelector(".result")


function sum() {
    
    num1 = document.querySelector(".number-area1").value;
    num2 = document.querySelector(".number-area2").value;

    common = +num1 + +num2
    result.innerHTML = common;
    
}

function decrease() {
    num1 = document.querySelector(".number-area1").value;
    num2 = document.querySelector(".number-area2").value;
    common = num1 - num2
    result.innerHTML = common;
}


function multiply() {
    num1 = document.querySelector(".number-area1").value;
    num2 = document.querySelector(".number-area2").value;
    common = num1 * num2
    result.innerHTML = common;
}



function divide() {
    num1 = document.querySelector(".number-area1").value;
    num2 = document.querySelector(".number-area2").value;
    common = num1 / num2
    result.innerHTML = common;
}

