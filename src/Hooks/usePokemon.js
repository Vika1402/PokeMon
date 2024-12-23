import axios from "axios";
import React, { useEffect, useState } from "react";

function usePokemon(idp) {
 

  const [pokemon, setPokemon] = useState({});
  async function downloadPokemon(idp) {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/`;
    const response = await axios.get(pokemonUrl + idp);
    const pokemon = response.data;

    setPokemon({
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types,
      image: pokemon.sprites.other.dream_world.front_default,
    });
    console.log(pokemon.types.map((t) => t.type.name));
  }

  useEffect(() => {
    downloadPokemon(idp);
  }, [idp]);

  return [pokemon];
}

export default usePokemon;
