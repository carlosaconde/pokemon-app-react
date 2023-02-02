import { CatchingPokemon } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"

export const Search = ({ onNewName, nameLabel }) => {
   const [name, setName] = useState('')

   const onInputChange = (e) => {
      setName(e.target.value)
   }

   const onSubmit = (e) => {
      e.preventDefault();
      onNewName(name);
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
               label={nameLabel}
               type="text"
               placeholder={`Buscar ${nameLabel}`}
               value={name}
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