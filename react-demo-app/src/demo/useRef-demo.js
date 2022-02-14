import { useState, useEffect, useRef, Children } from "react";
const Demo = () => {
  let [number, setNumber] = useState(0);
  return (
    <>
      <Child />
      <button onClick={() => setNumber({ number: number + 1 })}>++</button>
    </>
  );
};
let input;
const Child = () => {
  const inputRef = useRef(null);
  console.log("input===inputRef", input, input === inputRef);
  if (!input && inputRef.current) {
    input = inputRef;
  }
  const geFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={geFocus}>获取焦点</button>
    </>
  );
};
export default Demo;
