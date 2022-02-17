import { useState } from "react";
import {
  Hooks,
  ThisBind,
  UseStateDemo,
  UseEffectDemo,
  UseLayoutDemo,
  UseLayoutEffectDemo,
  UseRefDemo,
  ForwardRefDemo,
  CustomHook,
  CustomHooks,
  AutoComplete,
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
      {/* <UseLayoutDemo />
      <ThisBind /> */}
      {/* <UseStateDemo /> */}
      {/* <UseLayoutEffectDemo /> */}
      {/* <UseRefDemo /> */}
      {/* <ForwardRefDemo /> */}
      {/* <CustomHook /> */}
      <CustomHooks />
      {/* <AutoComplete /> */}
    </div>
  );
}

export default App;
