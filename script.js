const birthday = "2 April 2025";

function countdown(){
    const birthdayDate = new Date(birthday);
    const currentDate = new Date()

    const totalSecond = (birthdayDate-currentDate)/1000;

    const days = Math.floor(totalSecond / (3600*24));

    const hours = Math.floor(totalSecond % (3600*24)/(3600));

    const minutes = Math.floor(totalSecond % 3600/ 60);

    const seconds = Math.floor(totalSecond % 60);

    document.getElementById("days").innerText = formatTime(days); 
    document.getElementById("minutes").innerText = formatTime(minutes); 
    document.getElementById('hours').innerText = formatTime(hours); 
    document.getElementById('seconds').innerText = formatTime(seconds); 


}


function formatTime(time){


    return time < 10? ('0${time}') : time;

    
    // if(time<10){
    //     var times = 0${time};
    //     return times;
    // }
    // else{
    //     return time;
    // }
}

setInterval(countdown, 1000);
countdown();