let gameseq = [];
let userseq = [];

let btns = ["red","yellow","purple","green"]
let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelup();
    }

    
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random()*3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);

    btnFlash(randbtn);
}

function checkans(idx){
    
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000)
        }
    } else {

        h2.innerHTML = `Game Over!! <b>your score was ${level}</b>  <br> Press Any Key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        highscore();
        reset();
    }
}

function btnpress(){
    let btn = this;
    console.log(this)
    btnFlash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);

    checkans(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}

function highscore(){
    let hs = 0;
    if(hs <= level){
        hs = level-1;
        document.querySelector("h3").innerHTML = `Your highest score is <b>${hs}</b>`;


    }else{
        document.querySelector("h3").innerHTML = `Your highest score is <b>${hs}</b>`;
    }
}