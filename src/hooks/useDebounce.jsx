import { useState, useEffect } from "react";

export const useDebouce = (value, delay = 500) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => {
      setDebounced(value);
    }, delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
};
