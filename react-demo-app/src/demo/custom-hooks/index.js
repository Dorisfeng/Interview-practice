import useXState from "./useMyState";
const Demo = () => {
  const [number, setNumber] = useXState(0);
  const [number1, setNumber1] = useXState(1);
  const add = () => {
    setNumber(number + 1, (val) => {
      console.log("add cb", val);
    });
  };
  const add2 = () => {
    setNumber1(number1 + 2, (val) => {
      console.log("add2 cb", val);
    });
  };
  console.log("number", number);
  return (
    <div>
      <p>{number}</p>
      <button onClick={add}>+1</button>
      <p>{number1}</p>
      <button onClick={add2}>+2</button>
    </div>
  );
};
export default Demo;
