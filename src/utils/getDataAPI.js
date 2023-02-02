export const getDataAPI = async (value) => {
    const url = `${import.meta.env.VITE_API_POKEMON_V2}${value}`;
    const res = await fetch(url);
    return await res.json();
}