import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';

export default function SearchBox({update}){
    let [city, setCity]=useState("");
    let [error, seterror]= useState(false);
    function handleCh(ev) {
        setCity(ev.target.value)   
    }
    async function weatherData(){
       try{ const apiKey = import.meta.env.VITE_API_KEY ;
        let response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        let Jres = await response.json();
        // console.log(Jres);
        let result = {
            name:Jres.name,
            con:Jres.sys.country,
            temp: Jres.main.temp,
            des:Jres.weather[0].description,
            feels: Jres.main.feels_like,
            humid:Jres.main.humidity,
            wind:Jres.wind.speed,
        }
        console.log(result)
        return result;}
        catch(err){
            throw(err);
        }
    }
    async function submitCh(ev){
       try{ ev.preventDefault();
        seterror(false);
        console.log(city);
        setCity("");
        let newInfo= await weatherData();
        update(newInfo);}
        catch(err){
            seterror(true);
        }
    }
    return(<>
        <h1>Search For weather:</h1>
    <form onSubmit={submitCh}>
        <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleCh} required /><br/><br/>
        <Button type='submit' variant="contained" endIcon={<SearchOutlinedIcon />}>
        Search
      </Button>
      {error && <p style={{color:"red"}}>Not valid place!</p>}
     
    </form>
    </>
)
}
