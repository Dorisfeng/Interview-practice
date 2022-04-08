import SyntheticEvent from "./SyntheticEvent";
const addEvent = (container, type) => {
  container.addEventListener(type, (e) => {
    dispatchEvent(e, type.toUpperCase(), container);
  });
};

const dispatchEvent = (e, type) => {
  // 包装合成事件
  const se = new SyntheticEvent();
  const ele = e.target;

  //找到对应的FiberNode
  let fiber;
  for (let prop in ele) {
    if (prop.toLowerCase().includes("fiber")) {
      fiber = ele[prop];
    }
  }

  // 收集外层节点，该事件所有的回调函数
  const paths = collectPaths(type, fiber);

  // 捕获阶段实现
  triggerEventFlow(paths, type + "CAPTURE", se);
  //冒泡阶段实现
  triggerEventFlow(paths.reverse(), type, se);
};
// 收集绑定click事件的节点
const collectPaths = (type, begin) => {
  const paths = [];

  // 未遍历到根节点
  while (begin.tag !== 3) {
    const { memoizedProps, tag } = begin;
  }
  return paths;
};
// 捕获阶段实现
const triggerEventFlow = () => {};
export default addEvent;
