import React from "react";
import useDebounce from "../../Hooks/useDebounce";

function Search({ updateSearchTerm }) {
  const debounceUpdateSearch = useDebounce((e) =>
    updateSearchTerm(e.target.value)
  );
  return (
    <div className="w-full mt-4">
      <input
        type="text"
        id="search-pokemon"
        placeholder="Which Pokemon You Are looking For"
        className="w-[50%] input input-bordered input-info"
        onChange={debounceUpdateSearch}
      />
    </div>
  );
}

export default Search;
