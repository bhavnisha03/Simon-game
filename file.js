let gamesque = [];
let usersque = [];

let btns = ["yellow","red","green","purple"];

let started = false ;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress",() => {
   if (started == false){
    console.log("game is started");
    started = true;

    levelUp();
   }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp(){
    level++;
    h3.innerText = `level ${level}`;

    let ranidx = Math.floor(Math.random()*btns.length);
    let randcolor = btns[ranidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    btnFlash(randbtn);
}

function btnPress(){
   let btn = this;
   btnFlash(btn);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnPress);
}