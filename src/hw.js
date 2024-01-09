function search (event) {
    event.preventDefault ();
    let cityInputElement = document.querySelector("#enterCity");
    let city = cityInputElement.value;
    let h1 = document.querySelector("h1");
    h1.innerHTML=city;

let apiKey = "53980o1ef09d7553cet92b43aefbc155";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiURL).then(displaySearch)

}

function displaySearch (response) {
let displayTemp = document.querySelector("#tempValue");
let temp = Math.round(response.data.temperature.current);
displayTemp.innerHTML=`${temp}°C`;
}


let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", search);





function formatDate(date){
let hour = currentTime.getHours();
let minutes = currentTime.getMinutes();
if (minutes <10){
    minutes = `0${minutes}`}; 

if (hour<10){ hour=`0${hour}`;
}
let day = currentTime.getDay();


let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let formattedDay = days[day];

return `${formattedDay} ${hour}:${minutes}`;
}

let currentDate = document.querySelector("#current-date");
let currentTime=new Date();
currentDate.innerHTML = formatDate(currentTime);


