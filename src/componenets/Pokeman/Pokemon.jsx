import React from "react";
import { Link } from "react-router-dom";

function Pokemon({ pokemonData }) {
  return (
    <div className="flex flex-wrap items-center justify-center w-full h-full mt-4">
      {pokemonData.map((item) => {
        return (
          <Link
            to={`/pokemon/${item.id}`}
            key={item.id}
            className="shadow-xl card bg-base-600 w-80 h-80"
          >
            <figure className="px-10 pt-10 ">
              <img
                src={item.image}
                alt="Shoes"
                className="object-contain w-full h-full rounded-xl"
              />
            </figure>
            <div className="items-center text-center card-body">
              <h2 className="tracking-[.20em] card-title">{item.name}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Pokemon;
