import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "../Pokeman/Pokemon";
import usePokemonList from "../../Hooks/usePokemonList";

function PokeMonList() {
  const default_url = "https://pokeapi.co/api/v2/pokemon";
  const [pokemonState, setPokemonState] = usePokemonList(default_url);

  return (
    <>
      <div className="mt-5">
        <h1 className="text-2xl text-white">Pokemon List</h1>
      </div>

      <div className="flex gap-6 mt-4">
        <button
          onClick={() =>
            setPokemonState((prevState) => ({
              ...prevState,
              POKEDESX_URL: pokemonState.prevUrl,
            }))
          }
          className="btn btn-outline btn-primary"
        >
          Prev
        </button>
        <button
          onClick={() =>
            setPokemonState((prevState) => ({
              ...prevState,
              POKEDESX_URL: pokemonState.nextUrl,
            }))
          }
          className="btn btn-outline btn-secondary"
        >
          Next
        </button>
      </div>
      <Pokemon pokemonData={pokemonState.pokemonData} />
    </>
  );
}

export default PokeMonList;
