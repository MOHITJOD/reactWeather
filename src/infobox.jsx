import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { fontSize } from '@mui/system';
import Box from '@mui/material/Box';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import React from 'react';

export default function InfoBox({info}){
    const imageSunny = "https://wallpapers.com/images/hd/sunny-weather-with-cherry-blossom-fr2tn0f21evp0viw.jpg";
    const rainImg="https://media.istockphoto.com/id/503284599/photo/rainy-weather.jpg?s=612x612&w=0&k=20&c=pV38CVp0CLArYEZ6OUWnaqo6J5mo4JpbEZd61Vxr_I4=";
    const snowImg="https://d.newsweek.com/en/full/1956691/winter-forest-landscape-snow-covered-trees.jpg";
    let icon = info.humid > 80 ? ThunderstormIcon : info.temp < 10 ? AcUnitIcon : SunnyIcon;
    return(
    <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '60vh',
        width: '100%'
    }}>
        <h1>Weather</h1>
        <Card sx={{ width: '100%', maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humid>80 ? rainImg : info.temp < 10 ? snowImg : imageSunny}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.name} {icon && React.createElement(icon)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <div>Tempreature - {info.temp}&deg;C</div>
                    <div style={{fontWeight: "bold"}}>{info.description}</div>
                    <div>Feels Like - {info.feels}</div>
                    <div>Wind - {info.wind} km/hr</div>
                    <div>Humidity - {info.humid}%</div>
                </Typography>
            </CardContent>
        </Card>
    </Box>
    )
}