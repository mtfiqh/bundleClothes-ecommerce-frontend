import { useEffect } from "react";

const useScript = (src) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = src;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.removeChild(script);
    };
  }, [src]);
};

export default useScript;
