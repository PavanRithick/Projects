import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Infobox.css';
export default function Infobox({infor}) {
    const HAZE_URL="https://th.bing.com/th/id/OIP.qlhdQds_ZQHHz35Wu8pv_QHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    const COLD_URL="https://th.bing.com/th/id/OIP.debaDUCrSwMCZ-r2rP42BQHaE7?w=272&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    const HOT_URL="https://www.stockjournal.com.au/images/transform/v1/crop/frm/Fuxf4VmvfUmd225xeYC69T/cdc2e0bf-07e4-4e9a-a44e-0e85e5e00795.jpg/r0_76_4288_2849_w1200_h678_fmax.jpg";
    const RAIN_URL="https://th.bing.com/th/id/OIP.qyDa43AvWzqnxNi_PFz9fAHaFj?w=230&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
     return (
        <div className="Infobox">
          <div className='hi'>  <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        sx={{ height: 140 }}
        image={infor.humidity>80 ? RAIN_URL : infor.temp>20 ? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h3>{infor.city}</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
       
        <p>temp:{infor.temp}</p>
               <p> temp_max:{infor.temp_max}</p>
               <p>temp_min:{infor.temp_min}</p>
               <p>humidity:{infor.humidity}</p>
               <p> pressure:{infor.pressure}</p>
               <p> weather:{infor.weather}</p>
        </Typography>
      </CardContent>
    </Card></div>
        </div>
    );
}