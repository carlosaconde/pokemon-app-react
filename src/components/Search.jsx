
import { CatchingPokemon } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"

export const Search = ({ onNewName }) => {


   const [value, setValue] = useState('')
  
   const onInputChange = (e) => {
      setValue(e.target.value)
      
   }

   const onSubmit = (e) => {
      e.preventDefault();
      onNewName(value);

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
               value={value}
               onChange={onInputChange}
               InputProps={{
                  endAdornment: (
                     <InputAdornment position="end">
                        <CatchingPokemon fontSize="large" />
                     </InputAdornment>
                  )

               }}

            />

         </Box>
      </form>

   )
}