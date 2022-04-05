import { useEffect, useReducer, useSyncExternalStore } from "react";
import store from "./store";

export default function NewHookApi({ storeProps }) {
  //   const state = store.getState();
  //   const [, forceUpdate] = useReducer((x) => x + 1, 0);
  //   useEffect(() => {
  //     store.subscribe(() => {
  //       forceUpdate();
  //     }, []);
  //   });
  const state = useSyncExternalStore(store.subscribe, store.getState);
  return (
    <div>
      <h3>New Hook Api</h3>
      <button
        onClick={() => {
          store.dispatch({ type: "ADD" });
        }}
      >
        state-:{state}
      </button>
    </div>
  );
}
