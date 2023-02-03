/*
  la linea 9 no se usan las url
   crudas se usa algo llamado dot-env 
   para los enviroment ( variables de entorno )
*/
export const useGetByName = async (newName) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${newName}`;
  const res = await fetch(url);
  const data = await res.json();
  const pokemons ={
    image: data.sprites.other["official-artwork"].front_default,
    name:  data.forms[0].name,
    type:  data.types[0].type.name,
      id:  data.id
     }
   console.log(res);
  return  (
            pokemons 
          )
  
}


