import createStore from "./createStore";
function reducer(action, state = 0) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}
const store = createStore(reducer);

export default store;
