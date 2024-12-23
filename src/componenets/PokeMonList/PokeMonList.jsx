import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "../Pokeman/Pokemon";

function PokeMonList() {
  const default_url = "https://pokeapi.co/api/v2/pokemon";
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState(default_url);
  const [prevUrl, setprevUrl] = useState(default_url);
  const [POKEDESX_URL, setPOKEDESX_URL] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const downloadPokemon = async () => {
    const response = await axios.get(POKEDESX_URL ? POKEDESX_URL : default_url);
    const pokemonResult = await response.data.results;
    setNextUrl(response.data.next);
    setprevUrl(response.data.previous);

    const pokemonPromise = pokemonResult.map((pokemon) =>
      axios.get(pokemon.url)
    );

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
    setPokemonData(pokemonFinalList);
  };

  useEffect(() => {
    downloadPokemon();
  }, [POKEDESX_URL]);
  return (
    <>
      <div className="mt-5">
        <h1 className="text-2xl text-white">Pokemon List</h1>
      </div>

      <div className="flex gap-6 mt-4">
        <button
          onClick={() => setPOKEDESX_URL(prevUrl)}
          className="btn btn-outline btn-primary"
        >
          Prev
        </button>
        <button
          onClick={() => setPOKEDESX_URL(nextUrl)}
          className="btn btn-outline btn-secondary"
        >
          Next
        </button>
      </div>
      <Pokemon pokemonData={pokemonData} />
    </>
  );
}

export default PokeMonList;
