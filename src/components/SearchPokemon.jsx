/*
   el nombre del componente si se va a utilizar en muchos lados tiene que ser lo mas generico posible, aca es un poco al pedo el tema de que agregues pokemon ya que es redundante
   ( en mi codigo lo hice generico solo habia que cambiar algunos nombres y listo y pasar una prop mas)
*/

import { ArrowForward, CatchingPokemon } from "@mui/icons-material"
import { Button, InputAdornment, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"

export const SearchPokemon = ({ onNewPokemonName }) => {


   const [pokeName, setPokeName] = useState('')

   const onInputChange = (e) => {
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
                  endAdornment: (
                     <InputAdornment position="center">
                        <CatchingPokemon fontSize="large" />
                     </InputAdornment>
                  )

               }}

            />

         </Box>
      </form>

   )
}