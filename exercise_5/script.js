$(document).ready(function(){
    function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    var bgImages = ["imgs/slide1.jpg","imgs/slide2.jpg","imgs/slide3.jpg","imgs/slide4.jpg",];
    
var count = bgImages.length

var ticker = 0;    
var time = 0;
    

    // This gets a "handle" to the clock div in our HTML
    var clockDiv = document.getElementById('clock');

    // Then we set the text inside the clock div 
    // to the hours, minutes, and seconds of the current time
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
  }

  // This runs the displayTime function the first time
  displayTime();
    
    setInterval(displayTime, 1000);
    
    // If the seconds digit is less than ten                    
if (seconds < 10) {
    // Add the "0" digit to the front
    // so 9 becomes "09"
    seconds = "0" + seconds;
}; 
    
function screensaver(){
    var url = "url(" + bgImages [ticker] + ")";
    
    $("#screensaver").css("background-image", url)
    
    
    var tickerText = ticker + 1 + "/" + count;

    $("#ticker").text(tickerText);
    
    ticker+=1;
    if(ticker == count){
        ticker = 0;
    }

}

function screensaver(){
    var url = "url(" + bgImages [ticker] + ")";
    
    $("#screensaver").css("background-image", url)
    
    
    var tickerText = ticker + 1 + "/" + count;

    $("#ticker").text(tickerText);
    
    ticker+=1;
    if(ticker == count){
        ticker = 0;
    }

}
    
 //screensaver();   
    
$(document).click(function(){
    
    //screensaver();
    
})


setInterval(function(){
    
    screensaver()
    },2000)

$(document) . mousemove(function(){
    
    ticker=0; 
    time=0;
    $("#screensaver").css("opacity", 0)
    $("#ticker").css("opacity", 0)
    
})

setInterval(function(){
    
    time+=1;
    if(time>2){
          $("#screensaver").css("opacity", 1)
    $("#ticker").css("opacity", 1)
    }
    
    
},1000)




})