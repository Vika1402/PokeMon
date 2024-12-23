import React from "react";
import Search from "../Search/Search";
import PokeMonList from "../PokeMonList/PokeMonList";

function Pokedex() {
  return (
    <div className="flex flex-col items-center text-center wrapper">
      <h1 className="mt-[1rem] text-2xl tracking-[.40em]">POKEDEX</h1>
      <Search />
      <PokeMonList />
    </div>
  );
}

export default Pokedex;
