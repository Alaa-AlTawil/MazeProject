window.onload=function(){
const myDiv = document.getElementById("game");
myDiv.addEventListener("mousemove", play);


function play() {

    const start = document.getElementById("start");
    start.addEventListener("click", startPlaying);

}
function startPlaying() {
    myDiv.addEventListener("mouseleave", cheating);
    game.querySelectorAll('.boundary').forEach(item => {
        item.addEventListener('mousemove', boundaryLoser)
    });
    const end = document.getElementById("end");
    end.addEventListener("mousemove", winner);

}

}