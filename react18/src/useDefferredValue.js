import { useDeferredValue, useState } from "react";
import MySlowList from "./components/MySlowList";

export default function UseDeferredValuePage(props) {
  const [text, setText] = useState("hello");
  const deferredText = useDeferredValue(text);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h3> UseDeferredValuePage</h3>
      <input onChange={handleChange} />
      <p>{deferredText}</p>
      <MySlowList text={deferredText} />
    </div>
  );
}
