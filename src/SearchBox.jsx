import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";

export default function SearchBox({updateInfo}){
    let [city , setCity] = useState("");
    let [error , setError] = useState(false);

    let API_URL = import.meta.env.VITE_API_URL;
    let API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async() => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
    
            let result = {
                city : city,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
                
            }
            return result;

        }
        catch(err){
          throw err;
        }
      
    }

    let hanldeChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async(evt) => {
        try{
            evt.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false);

        }
        catch(err){
            setError(true);
        }
   
    };




    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={hanldeChange}/><br /><br /><br /><br />
            <Button variant='contained' type='submit'>Search</Button>
            { 
              error && <p style={{ color : "red"}}>No such place exist!</p>
              
            }

            </form>
        </div>
    )

}