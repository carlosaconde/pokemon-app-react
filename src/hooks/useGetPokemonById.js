import { getDataAPI } from "../utils/getDataAPI";

export const useGetPokemonById = async (value) => {
  const data = await getDataAPI(value);
  return (
    {
      pokemonId: data?.id,
      pokemonUrl: data?.sprites?.other["official-artwork"]?.front_default,
      pokemonName: data?.forms[0]?.name,
      pokemonType: data?.types[0]?.type.name,
    }
  )
}