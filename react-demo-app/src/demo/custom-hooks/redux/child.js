import { useContext } from "react";
import { Context } from "./redux";
import { add, dec, reset } from "./action";

const Demo = () => {
  const { state, dispatch } = useContext(Context);
  const add1 = () => {
    dispatch(add(1));
  };
  const dec1 = () => {
    dispatch(dec(2));
  };
  const handleReset = () => {
    dispatch(reset(1));
  };
  return (
    <div>
      <div>{state.count}</div>
      <button onClick={add1}>+1</button>
      <button onClick={dec1}>-2</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};
export default Demo;
