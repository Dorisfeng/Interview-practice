import { Provider } from "./redux";
import Child from "./child";

const Demo = () => {
  return (
    <div>
      <Provider props={{ initialState: 1 }}>
        <Child />
      </Provider>
    </div>
  );
};
export default Demo;
