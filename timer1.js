const startingMinutes = 00;
const startingSeconds = 30;
let jj= 00 ;
let time = startingMinutes * 60 + startingSeconds;
const countdwnElement= document.getElementById('countdown');
const stoper= document.getElementById('stop');
const starter= document.getElementById('start');
updateTimer=()=>{
    let Minutes = Math.floor(time/60);
    Minutes= Minutes <=1 ? '0'+ Minutes:Minutes;
    let Seconds = time % 60;
    Seconds= Seconds < 1 ?'0' + Seconds : Seconds;
    countdwnElement.innerHTML= `${Minutes}: ${Seconds}`;
    time--;
    if (time <1 ){
        countdwnElement.innerHTML= `00  :  00`;
        clearTimeout(time);
        clearInterval(exe);
        time = jj;
        document.getElementById("banner").innerHTML="You Lose";
        document.getElementById("banner").style.color=('#FFD23F');
        document.getElementById("number-submit").setAttribute('disabled', 'disabled');
        starter.setAttribute('disabled', 'disabled');
        document.getElementById("number-guess").disabled=true;
        stoper.setAttribute('disabled', 'disabled');
    }
}
startTimer=()=>{
 time = startingMinutes * 60 + startingSeconds;
        updateTimer();
        exe = setInterval(updateTimer, 1000);
        exe;

    }

stopTimer=()=>{
    exe1 = clearInterval(exe);
    clearTimeout(time);
    time= `0${startingMinutes}:${startingSeconds}`;
    countdwnElement.innerHTML= time;
    document.getElementById("number-submit").setAttribute('disabled', 'disabled');
    document.getElementById("number-guess").disabled=true;
    starter.setAttribute('disabled', 'disabled');
    //stoper.removeAttribute('disabled');
}

stoper.addEventListener("click", stopTimer);
starter.addEventListener("click",startTimer);

