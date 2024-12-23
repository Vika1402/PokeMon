import React from "react";

function useDebounce(cb, delay = 3500) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

export default useDebounce;
