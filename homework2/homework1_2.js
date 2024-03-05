const  axios = require("axios") ;

const getData = async () => {
    const response = await axios.get("https://dev.codekit.co/devcamp-api/covid-country.txt");
    const allCovidData = response.data;

    // Calculate the sum of todayRecovered
    const totalTodayRecovered = allCovidData.reduce(
        (sum, country) => sum + (country.todayRecovered || 0), 0
    );
    console.log(totalTodayRecovered);

    // Calculate the filtered of todayDeaths
    const totalTodayDeaths = allCovidData.map( (country) =>{
            if (country.todayDeaths < 10 && country.population > 100000000){
                return country.country;
            }
        }
    );
    console.log(totalTodayDeaths.filter( (pp) => pp !== undefined));
}
getData();