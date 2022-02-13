import { useEffect, useState } from "react";

const useNumber = () => {
  let [number, setNumber] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setNumber((number) => number + 1);
    }, 1000);
  }, []);
  return [number, setNumber];
};
const Count1 = () => {
  let [number, setNumber] = useNumber();
  return (
    <>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>
    </>
  );
};
const Count2 = () => {
  let [number, setNumber] = useNumber();
  return (
    <>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>
    </>
  );
};

const Demo = () => {
  return (
    <>
      <Count1 />
      <Count2 />
    </>
  );
};

export default Demo;
