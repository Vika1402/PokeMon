import axios from "axios";
import React, { useEffect, useState } from "react";
import downloadPokemon from "../Utils/downloadPokemon";

function usePokemonList(default_url) {
  // Consolidating state into a single object
  const [pokemonState, setPokemonState] = useState({
    pokemonData: [],
    nextUrl: default_url,
    prevUrl: default_url,
    POKEDESX_URL: default_url,
  });

  //pokemon url

 

  useEffect(() => {
    downloadPokemon(pokemonState,setPokemonState,default_url);
  }, [pokemonState.POKEDESX_URL]);
  return [pokemonState, setPokemonState];
}

export default usePokemonList;
