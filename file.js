let gameseq = [];
let userseq =  [];

let btn = ["yellow","red","purple","green"];
let started = false ;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started == true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },1000);
}
function levelUp() {
    level++;
    h3.innerText = `level${level}`;

    btnFlash();
}
