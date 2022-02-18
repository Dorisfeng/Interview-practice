import { useState, useRef, useEffect, useCallback } from "react";
// function throttle(fn, ms) {
//   let last = new Date().getTime();
//   const resThrottle = function (...arg) {
//     let now = new Date().getTime();
//     if (now - last >= ms) {
//       fn.apply(this, arg);
//       last = new Date();
//     }
//   };
//   return resThrottle;
// }
// function throttle(fn, ms) {
//   let timer;
//   const resThrottle = function (...arg) {
//     if (timer) return;

//     timer = setTimeout(() => {
//       fn.apply(this, arg);
//       clearTimeout(timer);
//       timer = null;
//     }, ms);
//   };

//   return resThrottle;
// }

const useThrottle = (fn, ms, deps = []) => {
  const { current } = useRef({ fn: fn, timer: null });
  useEffect(() => {
    current.fn = fn;
  }, [fn]);
  return useCallback(
    function (...args) {
      if (current.timer) return;
      current.timer = setTimeout(() => {
        current.fn.apply(this, args);
        current.timer = null;
      }, ms);
    },
    [...deps]
  );
};

const Demo = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  let throttleFn = useThrottle(function () {
    console.count("click1");
    setCounter1(counter1 + 1);
    return counter1 + 1;
  }, 5000);
  return (
    <div style={{ padding: 30 }}>
      <button
        onClick={function () {
          throttleFn();
        }}
      >
        click
      </button>

      <div>counter1:{counter1}</div>
      <div>
        counter2:{counter2}-----{new Date().getSeconds()}
      </div>
    </div>
  );
};
export default Demo;
