// import { useState, useRef, useEffect, useLayoutEffect } from "react";

// const useXState = (initState) => {
//   const [state, setState] = useState(initState);
//   let isUpdate = useRef();
//   const setXState = (state, cb) => {
//     setState((prev) => {
//       //   cb();
//       isUpdate.current = cb;
//       return typeof state === "function" ? state(prev) : state;
//     });
//   };
//   useLayoutEffect(() => {
//     console.log(111, state);
//     if (isUpdate.current) {
//       isUpdate.current();
//       isUpdate.current = null;
//     }
//   }, [state]);
//   return [state, setXState];
// };
// export default useXState;

import { useEffect, useRef, useState } from "react";

const useXState = (initState) => {
  const [state, setState] = useState(initState);
  let isUpdate = useRef();
  const setXState = (state, cb) => {
    setState((prev) => {
      let value = typeof state === "function" ? state(prev) : state;
      cb(value);
      return value;
    });
  };

  return [state, setXState];
};

export default useXState;
