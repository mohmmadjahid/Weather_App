import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

import  "./Weather.css";

import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city : "Wonderland",
        feelslike : 24.84,
        temp : 25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity : 47,
        weather : "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }



    return(
        <div style={{textAlign : "center"}} className="weather">
            <h1>Weather App by Mohmmad Jahid</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>

        </div>
    )
}