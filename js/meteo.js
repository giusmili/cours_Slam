let target = document.querySelector("#weather-result")

let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);
        console.log(response.current_condition.tmp);
        target.innerHTML += response.city_info.name+"<br>"
        target.innerHTML += response.city_info.country+"<br>"
        target.innerHTML += response.current_condition.tmp+ " degrés<br>"
        target.innerHTML += "<img src="+response.current_condition.icon+">"
       
    }
};
//requete
request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
request.send();