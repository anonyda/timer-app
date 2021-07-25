const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
pauseBtn.style = 'display: none'

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

let timer = null;

const startTimer = () => {
    
    
    if(hours.value == 0 && minutes.value == 0 && seconds.value== 0){
        alert('Enter a time to start the timer.')
    }
    else{
        startBtn.style = 'display: none';
        pauseBtn.style = 'display: unset';
        timer = setInterval(()=> {
            if(hours.value == 0 && minutes.value == 0 && seconds.value== 0){
                alert("Timer Completed");
                hours.value = "";
                minutes.value = "";
                seconds.value = "";
                clearInterval(timer);
                pauseBtn.style = 'display: none';
                startBtn.style = 'display: unset';


            }
            else if(seconds.value != 0){
                if(hours.value == ""){
                    hours.value = 0;
                }
                if(minutes.value==""){
                    minutes.value = 0;
                }
                seconds.value -=1;
            }
            else if(seconds.value == 0 && minutes.value != 0){ 
                if(hours.value == ""){
                    hours.value = 0;
                }
                minutes.value -= 1;
                seconds.value = 59;
            }
            else if(seconds.value == 0 && minutes.value == 0 && hours.value != 0){
                hours.value -= 1;
                minutes.value = 59;
                seconds.value = 59;
            }
        }, 1000);
    }   
}

const pauseTimer = () => {
    pauseBtn.style = 'display: none';
    startBtn.style = 'display: unset';
    clearInterval(timer);
}

const resetTimer = () => {
    pauseBtn.style = 'display: none';
    startBtn.style = 'display: unset';
    clearInterval(timer);
    hours.value = "";
    minutes.value = "";
    seconds.value = "";
}

startBtn.addEventListener('click', startTimer)

pauseBtn.addEventListener('click', pauseTimer)

resetBtn.addEventListener('click', resetTimer)