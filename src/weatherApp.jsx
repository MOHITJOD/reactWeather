import SearchBox from "./searchbox.jsx"
import Weather from "./infobox.jsx"
import { useState } from "react"
export default function WeatherA(){
    let [weather, setWeather]= useState({
        city:"",
        temp:"",
        humidity:null,
        description:"",
        wind:null,
        feels:null,
    })
    function updateW(newInfo){
        setWeather(newInfo)
    }
 return<>
  <SearchBox update= {updateW}/>
  <Weather info={weather}/>
 </>   
}