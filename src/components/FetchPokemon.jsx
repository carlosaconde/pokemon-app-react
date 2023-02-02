/*
  aca hay varias cosas, pero te voy a decir lo simple,
  no hace falta crear const para despues enviarlas como objeto podes enviar un objeto con las keys y los valores directamente, asi ahorras espacio, 
  la linea 14 a la 17 lo podrias hacer directamente en el return ya que devolves un obj.

  la linea 9 no se usan las url crudas se usa algo llamado dot-env para los enviroment ( variables de entorno )

  Algo importante, este archivo tendria que ser js y no jsx, ya que no es un componente y no tiene logica de react
*/
export const FetchPokemon = async (pokeName) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  const res = await fetch(url);
  const data = await res.json();
  // const pokeUrl = data.map( img => ( {
  //    image: img.data.sprites.other["official-artwork"].front_default,
  //    name: img.data.species.name,
  //    type: img.data.types.name
  //  }))
  const pokemonUrl = data.sprites.other["official-artwork"].front_default;
  const pokemonName = data.forms[0].name;
  const pokemonType = data.types[0].type.name;
  const pokemonId = data.id;
  //  console.log(pokemonType)
  // console.log(data);
  // console.log(pokemonId)
  return (
    {
      pokemonUrl,
      pokemonName,
      pokemonType,
      pokemonId
    }
  )
}

