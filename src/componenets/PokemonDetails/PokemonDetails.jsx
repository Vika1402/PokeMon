import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import usePokemon from "../../Hooks/usePokemon";
function PokemonDetails() {
  const { id } = useParams();
  const [idp, setIdp] = useState(Number(id));
  const [pokemon] = usePokemon(idp);
  return (
    pokemon && (
      <div className="flex-col items-center justify-center w-full h-full text-center">
        <div className="flex items-center justify-center gap-6 md:text-2xl">
          <button
            onClick={() => {
              if (idp == 1) {
                return;
              }
              setIdp(idp - 1);
            }}
          >
            <MdArrowBackIos />
          </button>
          <Link to={"/"} className="p-1 ">
            PokeDex
          </Link>
          <button onClick={() => setIdp(idp + 1)}>
            <MdArrowBackIos className="rotate-180" />
          </button>
        </div>

        <h1 className="text-4xl font-bold tracking-[0.90em] text-yellow-700">
          {pokemon.name}
        </h1>
        <div className="min-h-screen hero bg-base-200">
          <div className="flex-col hero-content lg:flex-row">
            <img
              src={pokemon.image}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-4xl font-bold tracking-widest ">
                {pokemon.name}
              </h1>

              <div className="flex gap-10 text-2xl tracking-wide">
                <p className="py-6">Height: {pokemon.height}</p>
                <p className="py-6">Weight: {pokemon.weight}</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <p className="text-2xl font-semibold">
                  <span>Type: </span>
                </p>
                <button className="text-xl btn-outline btn">
                  {pokemon.types &&
                    pokemon.types.map((t, index) => (
                      <span key={index}>{t.type.name}</span>
                    ))}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default PokemonDetails;
