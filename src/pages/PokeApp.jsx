import { useState } from "react"
import { Box } from "@mui/system";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useGetPokemonById } from "../hooks/useGetPokemonById";
import { Button, CardActions } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Search } from "../components/Search/Search";
import { useGetPokemonByName } from "../hooks/useGetPokemonByName";


export const PokeApp = () => {
  const [pokemon, setPokemon] = useState();

  const getPokemonByName = async (newPokemonName) => setPokemon(await useGetPokemonByName(newPokemonName));
  const getPokemonById = async (newPokemonId) => setPokemon(await useGetPokemonById(newPokemonId));

  const handleAdd = () => getPokemonById(pokemon.pokemonId + 1);
  const handleSubStract = () => getPokemonById(pokemon.pokemonId - 1);

  return (
    <>
      <div className="titulo">
        <h1> pokemon by charly </h1>
        <img className="logo" src="src\img\pngegg.png" alt="" />
      </div>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Search
          onNewName={(e) => getPokemonByName(e)}
          nameLabel="Pokemon"
        />

        {
          pokemon ? (
            <Card sx={{
              maxWidth: 345,
              backgroundColor: "orange",
            }}
              id={pokemon.pokemonId}>
              <CardMedia
                component="img"
                alt={pokemon.pokemonName}
                height="350"
                image={pokemon.pokemonUrl}
              />
              <CardContent sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Typography gutterBottom variant="h2" component="div">
                  {pokemon.pokemonName}
                </Typography>
                <Typography variant="h3" color="text.secondary">
                  {pokemon.pokemonType}
                </Typography>

                <CardActions >
                  <Button onClick={handleSubStract} size="small"
                  >
                    <ArrowBackIos fontSize="large" />
                  </Button >
                  <Button onClick={handleAdd} size="small"
                  >
                    <ArrowForwardIos fontSize="large" />
                  </Button>
                </CardActions >
              </CardContent>
            </Card>
          ) : null
        }
      </Box>
    </>
  );
}
