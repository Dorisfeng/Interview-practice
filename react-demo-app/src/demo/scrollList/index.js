import React, { useState, useRef } from "react";
import "./index.css";

const LENGTH = 1000;
const pageSize = 20;
const data = [];
for (let i = 0; i < LENGTH; i++) {
  data.push({ index: i, value: i });
}
// 节流
function throttle(fun, during) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fun.apply(this, arguments);
        clearTimeout(timer);
        timer = null;
      }, during);
    }
  };
}

const ScrollList = () => {
  const [list, setList] = useState(data.slice(0, pageSize));
  const scrollRef = useRef(null);
  const listRef = useRef(null);

  const handleScroll = () => {
    let scrollTop = scrollRef.current?.scrollTop || 0;
    let scrollNum = Math.floor(scrollTop / 20) || 0;

    let showStartIndex = scrollNum;
    let newList = data.slice(
      showStartIndex - 3 >= 0 ? showStartIndex - 3 : 0,
      showStartIndex + pageSize
    );
    setList(newList);
  };

  console.log(list);
  return (
    <div
      className="scroll-container"
      ref={scrollRef}
      onScroll={throttle(handleScroll, 500)}
    >
      <ul
        ref={listRef}
        style={{
          paddingTop: (list[0]?.index - 1) * 20,
          paddingBottom: (LENGTH - list[list.length - 1]?.index) * 20,
        }}
      >
        {list.map((item) => (
          <li key={item.index}>列表项{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollList;
