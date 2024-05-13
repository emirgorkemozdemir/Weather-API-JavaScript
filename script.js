// Bir tane dizi açın, dizi içerisine bazı değerleri ekleyeceğiz.
async function get_weather_by_city()
{
let selected_city = document.getElementById("tbox").value;
const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+selected_city;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2df2273180msha95b2a2e309084dp1944b8jsnc44917ebd81a',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
    var empty_array = [];

    // boş dizinin içerisine sırayla aşağıdakiler eklenecektir
    // 4 gün mü gece mi



    let value = JSON.parse(result);
    empty_array.push(value['current']['cloud']);
    empty_array.push(value['current']['condition']['text']);
    empty_array.push(value['current']['feelslike_c']);
    empty_array.push(value['current']['humidity']);
    empty_array.push(value['current']['is_day']);
    empty_array.push(value['current']['condition']['icon']);
    empty_array.push(value['current']['temp_c']);
    empty_array.push(value['current']['wind_kph']);
    empty_array.push(value['location']['name']);
    empty_array.push(value['location']['country']);
    empty_array.push(value['location']['localtime']);
	console.log(value);
    console.log(empty_array);


    localStorage.setItem("dizi",empty_array);
    window.open("weather.html");

} catch (error) {
	console.error(error);
}
}
