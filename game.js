window.onload=function(){
const myDiv = document.getElementById("game");
myDiv.addEventListener("mousemove", play);


function play() {

    const start = document.getElementById("start");
    start.addEventListener("click", startPlaying);

}


}