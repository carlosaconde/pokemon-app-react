
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


 
export function CardPokemon  ()  {



  
      return (
        
    <Card 
      sx={{
        maxWidth: 345,
        backgroundColor: "orange"

      }}>
        <CardMedia
          component="img"
          alt={onNewName.name}
          height="350"
          image={onNewName.image}
        />
        <CardContent sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Typography gutterBottom variant="h2" component="div">
            {onNewName.name}
          </Typography>
          <Typography variant="h3" color="text.secondary">
            {poke.type}
          </Typography>

          
        </CardContent>
      </Card>

     
  )

  
}
