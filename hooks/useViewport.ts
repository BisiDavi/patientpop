import { useState, useEffect } from "react";

export default function useViewport() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleWindowResize() {
      setInnerHeight(window.innerHeight);
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  console.log("innerWidth", innerWidth);

  console.log("innerHeight", innerHeight);

  return { innerWidth, innerHeight };
}
