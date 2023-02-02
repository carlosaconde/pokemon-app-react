import { CatchingPokemon } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"

export const SearchPokemon = ({onNewPokemonName}) => {
   

    const [pokeName, setPokeName] = useState('')
   
    const onInputChange = ( e )=> {
    setPokeName(e.target.value)

   }

  const onSubmit = (e) => {
  e.preventDefault();
   onNewPokemonName(pokeName);
  
  }
  
   return (
      
      <form onSubmit={onSubmit}>
        <Box sx={{
         width: 350
        }}>

        
        <TextField fullWidth
               sx={{
                  mt: 10
               }}
        variant="filled"
        label="pokemon"
        type="text"
        placeholder="buscar pokemon"
        value={pokeName}
        onChange={onInputChange}
        InputProps={{
         endAdornment:(
         <InputAdornment position="center">
        <CatchingPokemon  fontSize= "large" />
        </InputAdornment>
        )
        
        }}
        
        />
        
        </Box>
      </form>
      
   )
}