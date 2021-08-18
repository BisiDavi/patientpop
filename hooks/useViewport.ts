import { useState, useEffect } from "react";

export default function useViewport() {
  const [innerWidth, setInnerWidth] = useState(null);
  const [innerHeight, setInnerHeight] = useState(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleWindowResize() {
      setInnerHeight(window.innerHeight);
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  console.log("innerWidth", innerWidth);

  console.log("innerHeight", innerHeight);

  return { innerWidth, offset, innerHeight };
}
