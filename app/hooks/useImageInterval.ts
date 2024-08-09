import { useEffect, useState } from "react";

export default function useImageInterval({ length }: { length: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(Math.ceil(Math.random() * length - 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [count]);

  return [count];
}
