let result = localStorage.getItem("dizi");
let array = result.split(',');
let selected_body = document.getElementById("bodyy");

let local_time = array[10];
// 2024-05-13 19:40

let split_time = local_time.split(" ");
let only_hour = split_time[1].split(":");
let current_hour_as_number = Number(only_hour[0]);

if( (current_hour_as_number >=0 && current_hour_as_number <=5)  || (current_hour_as_number >=19 && current_hour_as_number <=23) )
{

}
else
{
    
}

document.getElementById("location").innerHTML= array[8] +", "+array[9];
document.getElementById("temp").innerHTML=array[6] + " C";
document.getElementById("weathericon").src = array[5];
document.getElementById("righttemp").innerHTML=" "+array[6] + " C";
document.getElementById("situation").innerHTML=array[1];
document.getElementById("cloud").innerHTML=array[0];
document.getElementById("flike").innerHTML=array[2];
document.getElementById("humidity").innerHTML=array[3];
document.getElementById("wind").innerHTML=array[7];