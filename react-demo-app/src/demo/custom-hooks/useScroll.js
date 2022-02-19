import { useState, useEffect, useRef } from "react";

const useScroll = (scrollRef) => {
  const [pos, setPos] = useState([0, 0]);

  useEffect(() => {
    function handleScroll(e) {
      setPos([scrollRef.current.scrollLeft, scrollRef.current.scrollTop]);
    }
    scrollRef.current.addEventListener("scroll", handleScroll, false);
    return () => {
      scrollRef.current.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  return pos;
};

// const useScroll = (scrollRef) => {
//   const [pos, setPos] = useState([0, 0]);

//   useEffect(() => {
//     function handleScroll(e) {
//       setPos([scrollRef.current.scrollLeft, scrollRef.current.scrollTop]);
//     }
//     scrollRef.current.addEventListener("scroll", handleScroll, false);
//     return () => {
//       scrollRef.current.removeEventListener("scroll", handleScroll, false);
//     };
//   }, []);

//   return pos;
// };

const useScrollStyle = (scrollRef) => {
  useEffect(() => {
    scrollRef.current.style = "border:3px solid #000";
  });
  return;
};

const Demo = () => {
  const scrollRef = useRef(null);
  useScrollStyle(scrollRef);

  return (
    <div>
      <div
        ref={scrollRef}
        style={{ width: 400, height: 200, overflow: "auto" }}
      >
        <div style={{ width: 1000, height: 1000, background: "blue" }}></div>
      </div>
    </div>
  );
};
export default Demo;
