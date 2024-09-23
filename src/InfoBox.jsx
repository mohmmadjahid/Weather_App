import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';



export default function InfoBox({ info }){


    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? "./public/rain.jpg" : info.temp > 15 ? "./public/hot.webp" : "./public/cold.avif" }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 80 
             ? <ThunderstormIcon /> 
             : info.temp > 15 
             ? < WbSunnyIcon/> 
             : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            <p><b>Temperature = {info.temp}&deg;C</b></p>
            <p><b>Humidity = {info.humidity}</b></p>
            <p><b>Min Temp = {info.tempMin}&deg;C</b></p>
            <p><b>Max Temp = {info.tempMax}&deg;C</b></p>
            <p><b>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</b></p>
     
        </Typography>
      </CardContent>

    </Card>
    </div>

        </div>
    )
}