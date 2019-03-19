

var cityToCheck  = "santa fe"//= prompt("Enter your city");
cityToCheck = cityToCheck.toLowerCase();
var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        console.log("It's one of the cleanest cities");
        //alert("It's one of the cleanest cities");
    }
}
console.log(cityToCheck);