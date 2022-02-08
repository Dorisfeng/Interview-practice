// import React, { useState } from "react";

// function Child1(porps) {
//   console.log(porps);
//   const { num, handleClick } = porps;
//   return (
//     <div
//       onClick={() => {
//         handleClick(num + 1);
//       }}
//     >
//       child
//     </div>
//   );
// }

// function Child2(porps) {
//   // console.log(porps);
//   const { text, handleClick } = porps;
//   return (
//     <div>
//       child2
//       <Grandson text={text} handleClick={handleClick} />
//     </div>
//   );
// }

// function Grandson(porps) {
//   console.log(porps);
//   const { text, handleClick } = porps;
//   return (
//     <div
//       onClick={() => {
//         handleClick(text + 1);
//       }}
//     >
//       grandson
//     </div>
//   );
// }

// function Parent() {
//   let [num, setNum] = useState(0);
//   let [text, setText] = useState(1);

//   return (
//     <div>
//       <Child1 num={num} handleClick={setNum} />
//       <Child2 text={text} handleClick={setText} />
//     </div>
//   );
// }

// export default Parent;

// function Counter2() {
//   let [number, setNumber] = useState(0);
//   function alertNumber() {
//     setTimeout(() => {
//       // alert 只能获取到点击按钮时的那个状态
//       alert(number);
//     }, 3000);
//   }
//   return (
//     <>
//       <p>{number}</p>
//       <button onClick={() => setNumber(number + 1)}>+</button>
//       <button onClick={alertNumber}>alertNumber</button>
//     </>
//   );
// }
// export default Counter2;
import React, { useState, memo, useMemo, useCallback } from "react";

function SubCounter({ onClick }) {
  console.log("SubCounter render");
  return <button onClick={onClick}>111</button>;
}
SubCounter = memo(SubCounter);

let oldData, oldAddClick;
export default function Counter2() {
  console.log("Counter render");
  const [name, setName] = useState("计数器");
  const [number, setNumber] = useState(0);
  // 父组件更新时，这里的变量和函数每次都会重新创建，那么子组件接受到的属性每次都会认为是新的
  // 所以子组件也会随之更新，这时候可以用到 useMemo
  // 有没有后面的依赖项数组很重要，否则还是会重新渲染
  // 如果后面的依赖项数组没有值的话，即使父组件的 number 值改变了，子组件也不会去更新
  //const data = useMemo(()=>({number}),[]);
  const data = useMemo(() => ({ number }), [number]);
  console.log("data===oldData ", data === oldData);
  oldData = data;

  // 有没有后面的依赖项数组很重要，否则还是会重新渲染
  const addClick = useCallback(() => {
    setNumber(number + 1);
  }, []);
  console.log("addClick===oldAddClick ", addClick === oldAddClick);
  oldAddClick = addClick;
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>{number}</div>
      <SubCounter onClick={addClick} />
    </>
  );
}
