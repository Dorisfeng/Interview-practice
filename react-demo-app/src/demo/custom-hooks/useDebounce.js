import { useEffect, useRef, useState, useCallback } from "react";
const useDebounce = (fn, ms = 30, immediately = false) => {
  const timer = useRef();
  const result = useRef();
  function resDebounced(...args) {
    // 一直触发，一直清除定时器
    if (timer.current) {
      clearTimeout(timer.current);
    }
    if (immediately) {
      //立即执行
      if (!timer.current) {
        result.current = fn.apply(this, ...args);
      }
      // 重置定时器，ms内不再执行回调
      timer.current = setTimeout(() => {
        timer.current = null;
      }, ms);
    } else {
      timer.current = setTimeout(() => {
        result.current = fn.apply(this, ...args);
        timer.current = null;
      }, ms);
    }
    return result.current;
  }

  if (!immediately) {
    resDebounced.cancel = function () {
      clearTimeout(timer.current);
    };
  }
  return resDebounced;
};
function debounce(fn, ms, immediately = false) {
  let timer, result;
  function resDebounced(...args) {
    // 一直触发，一直清除定时器
    if (timer) {
      clearTimeout(timer);
    }
    if (immediately) {
      //立即执行
      if (!timer) {
        result = fn.apply(this, ...args);
      }
      // 重置定时器，ms内不再执行回调
      timer = setTimeout(() => {
        timer = null;
      }, ms);
    } else {
      timer = setTimeout(() => {
        result = fn.apply(this, ...args);
        timer = null;
      }, ms);
    }

    return result;
  }
  resDebounced.cancel = function () {
    clearTimeout(timer);
  };
  return resDebounced;
}
// function debounce(fn, delay) {
//   let timer;
//   return function () {
//     let args = arguments;
//     timer !== undefined && clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }
// function debounce(fn, ms, immediately = false) {
//   let timer, result;
//   function resDebounced(...args) {
//     // 一直触发，一直清除定时器
//     if (timer) {
//       clearTimeout(timer);
//     }
//     if (immediately) {
//       //立即执行
//       if (!timer) {
//         result = fn.apply(this, ...args);
//       }
//       // 重置定时器，ms内不再执行回调
//       timer = setTimeout(() => {
//         timer = null;
//       }, ms);
//     } else {
//       timer = setTimeout(() => {
//         result = fn.apply(this, ...args);
//         timer = null;
//       }, ms);
//     }

//     return result;
//   }
//   resDebounced.cancel = function () {
//     clearTimeout(timer);
//   };
//   return resDebounced;
// }

// function debounce(fn, delay) {
//   let timer;
//   return function () {
//     let args = arguments;
//     //clearTimeout会把timer变成undefined
//     timer && clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//       // timer = null;
//     }, delay);
//   };
// }
const Demo = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  let debounceFn = useDebounce(function () {
    console.count("click1");
    setCounter1(counter1 + 1);
    return counter1 + 1;
  }, 5000);
  const resDebounced = debounceFn;

  useEffect(function () {
    const t = setInterval(() => {
      setCounter2((x) => x + 1);
    }, 1000);
    return clearInterval.bind(undefined, t);
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <button
        onClick={function () {
          resDebounced();
        }}
      >
        click
      </button>
      <button
        onClick={() => {
          resDebounced.cancel();
        }}
      >
        取消
      </button>
      <div>counter1:{counter1}</div>
      <div>
        counter2:{counter2}-----{new Date().getSeconds()}
      </div>
    </div>
  );
};

export default Demo;
