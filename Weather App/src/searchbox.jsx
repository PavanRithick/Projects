import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";
import { useState } from 'react';

export default function Searchbox({update}) {
    const [city, setCity] = useState("");
    let[error,setError]=useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "07087508b3ff61e3d12c18f6ba070699";

    const getWeather = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result={
                city: jsonResponse.name,
                temp:jsonResponse.main.temp,
                temp_max:jsonResponse.main.temp_max,
                temp_min:jsonResponse.main.temp_min,
                humidity:jsonResponse.main.humidity,
                pressure:jsonResponse.main.pressure,
                weather:jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        } catch (error) {
          throw error;
        }
    };

    const change = (event) => {
        setCity(event.target.value);
    };

    const submit = async(event) => {
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeather();
        
        update(newInfo);
        }catch (error){
            setError(true);
        }
    };

    return (
        <div className='search'>

            <form onSubmit={submit}>
                <TextField 
                    id="filled-basic" 
                    label="City" 
                    variant="filled" 
                    required 
                    value={city} 
                    onChange={change}
                />
                <br /> <br />
                <Button variant="contained" type="submit">
                    Send
                </Button>
                {error && <p style={{color:"red"}}>Cant retrieve info</p>}
            </form>
        </div>
    );
}
