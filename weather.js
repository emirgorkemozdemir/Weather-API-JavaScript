let result = localStorage.getItem("dizi");
let array = result.split(',');

document.getElementById("location").innerHTML= array[8] +", "+array[9];
document.getElementById("temp").innerHTML=array[6] + " C";
document.getElementById("weathericon").src = array[5];
document.getElementById("righttemp").innerHTML=" "+array[6] + " C";
document.getElementById("situation").innerHTML=array[1];
document.getElementById("cloud").innerHTML=array[0];
document.getElementById("flike").innerHTML=array[2];
document.getElementById("humidity").innerHTML=array[3];
document.getElementById("wind").innerHTML=array[7];