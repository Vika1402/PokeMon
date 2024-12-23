import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function usePokemon(pokemonName) {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  async function downloadPokemon(id) {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/`;
    let response = "";
    try {
      if (pokemonName) {
        response = await axios.get(pokemonUrl + pokemonName);
      } else {
        response = await axios.get(pokemonUrl + id);
      }
    } catch (error) {
      console.log("No pokemon Found");
    }

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
    downloadPokemon(id);
  }, [id, pokemonName]);

  return [pokemon, setPokemon];
}

export default usePokemon;
