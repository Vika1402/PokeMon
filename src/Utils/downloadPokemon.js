import axios from "axios";

const downloadPokemon = async (pokemonState, setPokemonState, default_url) => {
  const response = await axios.get(pokemonState.POKEDESX_URL);
  const pokemonResult = await response.data.results;

  // Update next and previous URLs
  const nextUrl = response.data.next;
  const prevUrl = response.data.previous;

  const pokemonPromise = pokemonResult.map((p) => {
    if (p.url) {
      return axios.get(p.url);
    } else if (p.pokemon.url) {
      return axios.get(p.pokemon.url);
    }
  });

  const pokemonDataList = await axios.all(pokemonPromise);

  const pokemonFinalList = pokemonDataList.map((pokemonData) => {
    const pokemon = pokemonData.data;
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types,
    };
  });

  console.log(pokemonFinalList);

  // Update state with new data
  setPokemonState((prevState) => ({
    ...prevState,
    pokemonData: pokemonFinalList,
    nextUrl,
    prevUrl,
  }));
};

export default downloadPokemon;
