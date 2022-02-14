import React, { useEffect, useState } from "react";
const Demo = () => {
  const [a, setA] = useState(1);
  useEffect(() => {
    window.document.addEventListener("click", callback);
    return () => {
      console.log("useEffect 卸载");
      window.document.removeEventListener("click", callback);
    };
  });
  const callback = () => {
    console.log("dom click");
  };
  return (
    <div>
      <div>{a}</div>
      <button
        onClick={() => {
          setA((a) => ++a);
        }}
      >
        +++
      </button>
      <div>UseEffectDemo</div>
    </div>
  );
};
export default Demo;
