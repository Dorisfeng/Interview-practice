import SyntheticEvent from "./SyntheticEvent";
const addEvent = (container, type) => {
  container.addEventListener(type, (e) => {
    dispatchEvent(e, type.toUpperCase(), container);
  });
};

const dispatchEvent = (e, type) => {
  // 包装合成事件
  const se = new SyntheticEvent(e);
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

  // 第五步：冒泡阶段的实现
  if (!se._stopPropagation) {
    triggerEventFlow(paths.reverse(), type, se);
  }
};
// 收集绑定click事件的节点
const collectPaths = (type, begin) => {
  const paths = [];

  // 未遍历到根节点
  while (begin.tag !== 3) {
    const { memoizedProps, tag } = begin;
    if (tag === 5) {
      const eventName = ("on" + type).toUpperCase();
      // 如果包含对应事件回调，保存到paths中
      if (memoizedProps && Object.keys(memoizedProps).includes(eventName)) {
        const pathNode = {};
        pathNode[type.toUpperCase()] = memoizedProps[eventName];
        paths.push(pathNode);
      }
    }
    begin = begin.return;
  }
  return paths;
};
// 捕获阶段实现
const triggerEventFlow = (paths, type, se) => {
  // 从后往前遍历
  for (let i = paths.length; i--; ) {
    const pathNode = paths[i];
    const callback = pathNode[type];

    if (callback) {
      callback.call(null, se);
    }
    if (se._stopPropagation) {
      console.log("阻止冒泡");
      // 如果执行了se.stopPropagation() 取消接下来的遍历
      break;
    }
  }
};
export default addEvent;
