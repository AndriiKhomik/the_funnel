import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
    }
  });
  // const ls =
  //   (await JSON.parse(window.localStorage.getItem(key))) ?? defaultValue;

  // useEffect(() => {
  //   const stored = localStorage.getItem(key);
  //   setValue(stored ? JSON.parse(stored) : []);
  // }, [key, setValue]);

  // useEffect(() => {
  //   localStorage.setItem(key, JSON.stringify(value));
  // }, [key, setValue]);
  // // -----
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
