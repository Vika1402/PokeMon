import React from "react";

function Search() {
  return (
    <div className="w-full mt-4">
      <input
        type="text"
        id="search-pokemon"
        placeholder="Which Pokemon You Are looking For"
        className="w-[50%] input input-bordered input-info"
      />
    </div>
  );
}

export default Search;
