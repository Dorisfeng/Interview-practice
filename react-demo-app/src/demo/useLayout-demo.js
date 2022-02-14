import React, { useState, useEffect, useLayoutEffect } from "react";

const EffectDemo = () => {
  const [count, setCount] = useState(0);
  useEffect(
    function useEffectDemo() {
      console.log("useEffect:", count);
    },
    [count]
  );
  useLayoutEffect(
    function useLayoutEffectDemo() {
      console.log("useLayoutEffect:", count);
    },
    [count]
  );
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default EffectDemo;
