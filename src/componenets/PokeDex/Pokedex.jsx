import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import PokeMonList from "../PokeMonList/PokeMonList";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(()=>{
    
  },[searchTerm])
  return (
    <div className="flex flex-col items-center text-center wrapper">
      <h1 className="mt-[1rem] text-2xl tracking-[.40em]">POKEDEX</h1>
      <Search updateSearchTerm={setSearchTerm} />

      {searchTerm ? (
        <PokemonDetails pokemonName={searchTerm} />
      ) : (
        <PokeMonList />
      )}
    </div>
  );
}

export default Pokedex;
