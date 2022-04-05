import React, { useEffect, useRef } from "react";

const Demo = () => {
  const father = useRef();
  const child = useRef();
  useEffect(() => {
    if (father.current) {
      father.current.addEventListener("click", () => {
        console.log("dom father click");
      });
    }
    if (child.current) {
      child.current.addEventListener("click", () => {
        console.log("dom child child");
      });
    }
    document.getElementById("root").addEventListener("click", () => {
      console.log("root click");
    });
    document.addEventListener("click", () => {
      console.log("document click");
    });
  });
  return (
    <div>
      <div
        ref={father}
        onClick={() => {
          console.log("react, father click");
        }}
      >
        <div
          ref={child}
          onClick={(e) => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            // if (e.target && e.target.matches("div.code")) {
            //   return;
            // }
            console.log("react, child click");
          }}
        >
          button
        </div>
      </div>
    </div>
  );
};

export default Demo;
