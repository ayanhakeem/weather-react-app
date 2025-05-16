import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';


export default function weatherApp(){
    let [weatherInfo,setweatherInfo]=useState({
        city:"byadgi",
        feelsLike:25.88,
        humidity:62,
        temp:25.64,
        tempMax:25.9,
        tempMin:25.06,
        weather:"broken clouds",
    });

    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:'center'}}>
            <h1>Weather App from Ayan</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}