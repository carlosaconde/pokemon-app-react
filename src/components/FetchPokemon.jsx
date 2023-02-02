
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

