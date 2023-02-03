/*
  podrias ocualtar la primera card ya que no hay datos
  
 */
import { useEffect, useState } from "react"
import { useGetByName } from "./components/useGetByName";
import { Search } from "./components/Search";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Button, CardActions } from "@mui/material";
import { useGetById } from "./components/useGetById";



export const PokeApp = () => {

  const [pokemon, setPokemon] = useState({});
  const [showCard, setshowCard] = useState(false)
  
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png'
   const getPokemonByName = async (newName) => {
    setPokemon (await useGetByName(newName));
    setshowCard(true);
   }
    
   const getPokemonById = async (newId) =>{
   setPokemon (await useGetById(newId));
    setshowCard(true)
  }

   const handleAdd = () => {
    
    getPokemonById(pokemon.id + 1);
  }

  const handleSubStract = () => {
    
    getPokemonById(pokemon.id - 1);
    
  }
// console.log(pokemon);

  useEffect(() => {
    getPokemonByName(pokemon.name);
    getPokemonById(pokemon.id);
    
  }, [])
  
  // (pokemon.id!=0 || pokemon.name!='') ? <CardPokemon/> :''
  //  (show) ? <CardPokemon/> :'' ;



   return (
        <>
    
      <div className="titulo">
       <h1> pokemon App by charly </h1>
       <img className="logo" src="src\img\pngegg.png" alt="" />
     </div>
     <Box sx={{
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center'
     }}>
         <Search
           onNewName={(e) => getPokemonByName(e)} />
          {
            (showCard && pokemon.name!='')
            ? <Card sx={{
              maxWidth: 345,
              backgroundColor: "orange"
            }}>
              <CardMedia
                component="img"
                alt={pokemon.name}
                height="350"
                image={pokemon.image} />
              <CardContent sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Typography gutterBottom variant="h2" component="div">
                  {pokemon.name}
                </Typography>
                <Typography variant="h3" color="text.secondary">
                  {pokemon.type}
                </Typography>
   
                <CardActions>
                  <Button onClick={handleSubStract} size="small"
                  >
                    <ArrowBackIos fontSize="large" />
                  </Button>
                  <Button onClick={handleAdd} size="small"
                  >
                    <ArrowForwardIos fontSize="large" />
                  </Button>
                </CardActions>
               </CardContent>
               </Card>
              : <h2>Ingrese nro o nombre de pokemon para iniciar</h2> 
          }
         
           </Box>
           </>
          )


       }
       
