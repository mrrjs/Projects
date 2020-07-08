
//Automatic refresh clock
function updateTime(){
    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()
      if (hours < 10) {
      	hours = "0" + hours
      } else if (minutes < 10){
          minutes = "0" + minutes
      } else if (seconds < 10) {
      	seconds = "0" + seconds
      }
    let timeStr = hours + ":" + minutes + " " + seconds + " ";
      if(hours > 11){
          timeStr += "PM";
      } else {
          timeStr += "AM";
      }
      document.getElementById('clockTime').innerHTML = timeStr;
    }
setInterval(updateTime, 1000);


//Calculator
function calc() {
	let val1 = parseInt(document.querySelector("#value1").value);
	let val2 = parseInt(document.querySelector("#value2").value);
	let oprTor = document.querySelector("#operator").value;
	let calculate;
  	if (oprTor == "add") {
  		calculate = val1 + val2;
  	}
  	else if (oprTor == "min") {
  		calculate = val1 - val2;
  	}
  	else if (oprTor == "div") {
  		calculate = val1 / val2;
  	}
  	else if (oprTor == "mul") {
  		calculate = val1 * val2;
  	}
	document.querySelector('#result').innerHTML = calculate;
}
