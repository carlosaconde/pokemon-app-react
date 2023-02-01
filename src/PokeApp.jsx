import { useEffect, useState } from "react"
import { FetchPokemon } from "./components/FetchPokemon.jsx";
import { SearchPokemon } from "./components/SearchPokemon.jsx";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Button, CardActions } from "@mui/material";


export const PokeApp = () => {
  
  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png
   const [pokeName, setPokeName] = useState(1)
  const [pokeUrl, setPokemonUrl] = useState('')
  const [pokeType, setPokeType] = useState('')
  
  const [id, setId] = useState(1)

  
const handleAdd = () => {
  setId(id+1);
  
  getPokemon(id+1);
  
}

const handleSubStract = ()=>{
  setId(id-1);
  
  getPokemon(id-1);
}

  const getPokemon= async ( newPokemonName )=>{

    const{pokemonUrl,pokemonName,pokemonType,pokemonId} = await FetchPokemon(newPokemonName);
    setPokeName(pokemonName);
    setPokeType(pokemonType);
    setPokemonUrl(pokemonUrl);
    setId(pokemonId);

    

 
     return (
      pokeName,
      pokeUrl,
      pokeType
     )
  }
 
   
     useEffect(()=> {
       getPokemon(pokeName);
       getPokemon(id);
        // getPokemonName('pichu')
     }, [])

  return (
    
    <>
    <div className="titulo">
      <h1> pokemone by charly </h1>
     <img className="logo" src="src\img\pngegg.png" alt="" />
    </div>
    
<Box sx={{
  display:'flex',
  flexDirection:'column',
  justifyContent: 'center',
  alignItems:'center'
}}>
    <SearchPokemon 
    onNewPokemonName={(e)=>getPokemon(e)}
    
    />

    <Card sx={{ maxWidth: 345,
            backgroundColor: "orange",
            
           }}>
      <CardMedia
        component="img"
        alt={pokeName}
        height="350"
        image={pokeUrl}
      />
      <CardContent sx={{
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center"
      }}>
        <Typography gutterBottom variant="h2" component="div">
          {pokeName}
        </Typography>
        <Typography variant="h3" color="text.secondary">
          {pokeType}
        </Typography>
        
        <CardActions >
        <Button onClick={handleSubStract} size="small"
       >
          <ArrowBackIos  fontSize="large"/>
        </Button >
        <Button onClick={handleAdd} size="small"
        >
          <ArrowForwardIos  fontSize="large"/>
        </Button>
      </CardActions >
      </CardContent>
      
    </Card>

    </Box>
    </>
  );
}
