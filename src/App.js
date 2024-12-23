import React, { useEffect } from "react";
import Pokedex from "./componenets/PokeDex/Pokedex";
import { pokemonContext } from "./componenets/pokemonContext/pokemonContext";
import { Route, Routes } from "react-router-dom";
import PokemonDetails from "./componenets/PokemonDetails/PokemonDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />

        <Route
          path="*"
          element={
            <div className="w-full h-[100vh]">
              <img
                className="w-full h-full"
                src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg?ga=GA1.1.2024936588.1734079803&semt=ais_hybrid"
              />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
