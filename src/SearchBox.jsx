import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from "react";


export default function SearchBox({updateInfo}){
    let [City,setCity] = useState("");
    let [error,seterror]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="8f3ff07c5bda59e3a99b1e8e6231c1eb";

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
            let jsonresponse=await response.json();
            console.log(jsonresponse);
            let result={
                city:City,
                temp:jsonresponse.main.temp,
                tempMin:jsonresponse.main.temp_min,
                tempMax:jsonresponse.main.temp_max,
                humidity:jsonresponse.main.humidity,
                feelsLike:jsonresponse.main.feels_like,
                weather:jsonresponse.weather[0].description,
        };
        console.log(result);
        return result;

        }catch(err){
            throw err;
        }
        
    };
    
    

    let HandleChange=(evt)=>{
        setCity(evt.target.value);
    };

    let HandlerSubmit=async(evt)=>{
        try{
            evt.preventDefault();
            console.log(City);
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            seterror(true);   
    };
}

    return(
        <div className="SearchBox">
            <form onSubmit={HandlerSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={City} onChange={HandleChange} />
            <br></br><br></br>
            {error && <p style={{color:'red'}}>No such Place Exist!</p>}
            <Button variant="contained" type="submit">Search</Button>
            </form>    
        </div>
    );
}