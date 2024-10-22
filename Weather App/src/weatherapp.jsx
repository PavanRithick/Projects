import Searchbox from "./searchbox"
import Infobox from "./Infobox"
import { useState } from "react"
export default function Weatherapp(){
    const[weather,setWeather]=useState({
        city: "Hyderabad",
        temp: 30.03,
        temp_max: 31.04,
        temp_min: 22.01,
        humidity: 47,
        pressure: 34.01,
        weather: "HOT"
    });
    let update=(newInfo)=>{
        setWeather(newInfo);
    };
    return(
    <div style={{textAlign:"center"}}>
        <h2>WEATHER APP</h2>
        <Searchbox update={update} />
        <Infobox infor={weather}/>
    </div>);
}