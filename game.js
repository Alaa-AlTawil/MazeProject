window.onload=function(){
const myDiv = document.getElementById("game");
myDiv.addEventListener("mousemove", play);
var s = 0;

function play() {

    const start = document.getElementById("start");
    start.addEventListener("click", startPlaying);

}

function startPlaying() {

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

    game.querySelectorAll('.boundary').forEach(item => {
        item.removeEventListener('mousemove', boundaryLoser)
    });
    end.removeEventListener("mousemove", winner);
    myDiv.removeEventListener("mouseleave", cheating);
    s += 5;
    document.getElementById("status").textContent = "winner your score is " + s;
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