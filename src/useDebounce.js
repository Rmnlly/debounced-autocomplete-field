import { useState, useEffect } from "react";

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    //The debounced value is going to be set to the passed
    //in value after our delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    //This clearTimeout being called will make it so that if our
    //user keeps typing we keep canceling the previous debounce
    //time and restarting it with the users new value.
    //So if our user is typing they'll see something happen 500ms
    //after they FINISH typing

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
