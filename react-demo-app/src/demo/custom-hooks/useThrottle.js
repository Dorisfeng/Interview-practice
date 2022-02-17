import { useState } from "react";
function throttle() {}
const Demo = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  let debounceFn = throttle(function () {
    console.count("click1");
    setCounter1(counter1 + 1);
    return counter1 + 1;
  }, 5000);
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
