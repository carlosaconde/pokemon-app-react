export const useGetById = async (newId) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${newId}`;
    const res = await fetch(url);
    const data = await res.json();
    const pokemons ={
      image: data.sprites.other["official-artwork"].front_default,
      name:  data.forms[0].name,
      type:  data.types[0].type.name,
        id:  data.id
       }
  
    return  (
              pokemons 
            )
    
  }