// reducer是状态修改规则
export default function createStore(reducer) {
  let currentState;
  let listeners = [];
  function getState() {
    return currentState;
  }
  function dispatch(action) {
    currentState = reducer(action, currentState);
    console.log("currentState", currentState);
    listeners.forEach((listener) => listener());
  }
  function subscribe(listener) {
    listeners.push(listener);
  }
  dispatch({ type: "ADDDDD" });

  return {
    getState,
    dispatch,
    subscribe,
  };
}
