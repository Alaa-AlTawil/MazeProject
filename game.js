window.onload=function(){
const myDiv = document.getElementById("game");
var value1=document.getElementById("v1");
var value2=document.getElementById("v2");
var value3=document.getElementById("v3");
myDiv.addEventListener("mousemove", play);
var s = 0;
tlive=0;
tbest=0;
tlast=0;
var x=0;
var y =0;
min=Infinity;
flag=false;

function play() {

    const start = document.getElementById("start");
    start.addEventListener("click", startPlaying);

}

function startPlaying() {

    x=Date.now();
    myDiv.addEventListener("mouseleave", cheating);

    game.querySelectorAll('.youlose').forEach(item => {
        item.classList.add("boundary")
    });
    game.querySelectorAll('.boundary').forEach(item => {
        item.classList.remove("youlose")
    });

    game.querySelectorAll('.boundary').forEach(item => {
        item.addEventListener('mousemove', boundaryLoser)
    });
    const end = document.getElementById("end");
    end.addEventListener("mousemove", winner);

}


function boundaryLoser() {

    game.querySelectorAll('.boundary').forEach(item => {
        item.classList.add("youlose");
    });
    game.querySelectorAll('.boundary').forEach(item => {
        item.removeEventListener('mousemove', boundaryLoser)
    });
    end.removeEventListener("mousemove", winner);
    myDiv.removeEventListener("mouseleave", cheating);
    s -= 10;
    document.getElementById("status").textContent = "loser " + s;

}

function winner() {
    y =Date.now();
    game.querySelectorAll('.boundary').forEach(item => {
        item.removeEventListener('mousemove', boundaryLoser)
    });
    end.removeEventListener("mousemove", winner);
    myDiv.removeEventListener("mouseleave", cheating);
    s += 5;
    document.getElementById("status").textContent = "winner your score is " + s;
    tlast=tlive;
    tlive=(y-x)/1000;
    
    value1.innerText=tlive+"sec";
    if (min>tlive){
        min=tlive;
        value3.innerText=tlive+"sec";
    }
    if(!flag){
        value2.innerText=0;
        flag=true;}
    else{
        value2.innerText=tlast+"sec"
    }

}

function cheating() {
    s = 0;


    document.getElementById("status").textContent = "loser " + s;

    game.querySelectorAll('.boundary').forEach(item => {
        item.classList.add("youlose");
    });
    game.querySelectorAll('.boundary').forEach(item => {
        item.removeEventListener('mousemove', boundaryLoser)
    });
    myDiv.removeEventListener("mouseleave", cheating);
    end.removeEventListener("mousemove", winner);
    alert("cheeeaaaating!!!!\nyour score is " + s);
}
}