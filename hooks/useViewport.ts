import { useState, useEffect } from "react";

export default function useViewport() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  function handleWidthResize() {
    setInnerWidth(window.innerWidth);
  }

  function handleHeightResize() {
    setInnerHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWidthResize);
    return () => window.removeEventListener("resize", handleWidthResize);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleHeightResize);
    return () => window.removeEventListener("resize", handleHeightResize);
  }, []);

  console.log("innerWidth", innerWidth);

  console.log("innerHeight", innerHeight);

  return { innerWidth, innerHeight };
}
