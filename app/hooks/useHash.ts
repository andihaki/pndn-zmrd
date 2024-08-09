import { useEffect, useState } from "react";

export default function useHash() {
  const [hash, setHash] = useState("#");

  useEffect(() => {
    setHash(window.location.hash || "#");
  }, []);

  return [hash, setHash] as const;
}
