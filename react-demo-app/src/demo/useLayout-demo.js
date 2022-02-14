// import React, { useState, useEffect, useLayoutEffect } from "react";

// const EffectDemo = () => {
//   const [count, setCount] = useState(0);
//   useEffect(
//     function useEffectDemo() {
//       console.log("useEffect:", count);
//     },
//     [count]
//   );
//   useLayoutEffect(
//     function useLayoutEffectDemo() {
//       console.log("useLayoutEffect:", count);
//     },
//     [count]
//   );
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         click me
//       </button>
//     </div>
//   );
// };

// export default EffectDemo;
import { useLayoutEffect, useEffect, useState } from "react";
function LayoutEffect() {
  const [color, setColor] = useState("red");
  useLayoutEffect(() => {
    alert(color);
  });
  useEffect(() => {
    console.log("color", color);
  });
  return (
    <>
      <div id="myDiv" style={{ background: color }}>
        颜色
      </div>
      <button onClick={() => setColor("red")}>红</button>
      <button onClick={() => setColor("yellow")}>黄</button>
      <button onClick={() => setColor("blue")}>蓝</button>
    </>
  );
}
export default LayoutEffect;
