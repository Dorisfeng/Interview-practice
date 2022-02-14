import { useState } from "react";
import {
  Hooks,
  ThisBind,
  UseStateDemo,
  UseEffectDemo,
  UseLayoutDemo,
} from "./demo";
import "./App.css";
function App() {
  let [total, setTotal] = useState(1);

  return (
    <div className="App">
      {/* <Hooks />
      <ThisBind />       <UseStateDemo />*/}
      {/* <button
        onClick={() => {
          setTotal((t) => ++t);
        }}
      >
        +++
      </button>
      {total % 2 && <UseEffectDemo />} */}
      <UseLayoutDemo />
    </div>
  );
}

export default App;
