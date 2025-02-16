let con =document.querySelectorAll(".con");
let computer =document.querySelectorAll(".computer");
let user  = document.querySelector (".user");
let machine = document.querySelector (".machine");
let winmodel = document.querySelector(".win-model");
let winner = document.querySelector(".winner");
let play = document.querySelector(".play");
console.log("computer");
let random = Math.floor(Math.random()*3);
let triangle=document.querySelector(".triangle");
let score = JSON.parse(localStorage.getItem("score"));
let scoreElem = document.getElementById("#score");
let rules = document.querySelector(".btn-rule");
let rulemodel = document.querySelector(".rule-model");
let ruleimg = document.querySelector(".rule-img");
if(score){
    scoreElem.innerText = score;
}
let count = 0;
con.forEach((element , index) => {
element.addEventListener("click", ()=>{
    user.style.opacity = "1";
    triangle.style.display = "none";
    con.forEach(item => {
        item.style.display = "none";
    });
    element.style.display="block";
    element.classList.add("show");
    setTimeout(() => {
    machine.style.opacity = "1";
    setTimeout(() => {
        computer[random].style.display = "block";
        computer[random].classList.add("right");
        
    }, 1000);
      
    }, 500);
    setTimeout(() => {
        if(random == index) {
            winmodel.style.display = "grid";
         winner.innerText = "TIE";
        }
        else if(index == 0 && random == 2 || index == 1 && random == 0 || index == 2 && random == 1 ){
         winmodel.style.display = "grid";
         winner.innerText = "You Win";
         count=score;
         count++;
         scoreElem.innerText = count;
         localStorage.setItem("score",JSON.stringify(count));
        }else{
            winmodel.style.display = "grid";
         winner.innerText = " You Lose";


        }
    }, 1500);
    

})
});
play.addEventListener ("click", ()=> {
window.location.reload();
})
// ruleBtn = addEventListener("click", ()=> {
//     rulemodel.style.display="flex";
//  setTimeout(() => {
//     ruleimg.style.transform = "translateY(0)";
//  }, 400);
// });
// let close=document.querySelector(".close");
// close.addEventListener ("click", ()=> {
//     ruleimg.style.transform = "translateY(-200%)";
//  setTimeout(() => {
//     rulemodel.style.display="none";
//  }, 400);
// })

