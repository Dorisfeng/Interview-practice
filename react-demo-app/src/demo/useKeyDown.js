import { useEffect } from "react";

const useKeyPress = (keys, callback) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (keys.includes(e.key)) {
        e.preventDefault();
        callback();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });
};

export default useKeyPress;
