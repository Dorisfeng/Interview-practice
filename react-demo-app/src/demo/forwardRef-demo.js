import { useRef, forwardRef, useImperativeHandle } from "react";

let Child = (props, parentRef) => {
  let focusRef = useRef();
  let inputRef = useRef();
  useImperativeHandle(parentRef, () => {
    // 返回一个对象，作为父组件的current属性
    // 父组件可以使用操作子组件中的多个ref
    return {
      focusRef,
      inputRef,
      name: "计数器",
      focus() {
        focusRef.current.focus();
      },
      changeText(text) {
        inputRef.current.value = text;
      },
    };
  });
  return (
    <>
      <input ref={focusRef} type="text" />
      <input ref={inputRef} />
    </>
  );
};
Child = forwardRef(Child);

const ForwardRefDemo = () => {
  const parentRef = useRef();

  const getFocus = () => {
    parentRef.current.focus();
    parentRef.current.changeText("<script>alert(1)</script>");
    console.log(parentRef.current.name);
  };
  return (
    <>
      <Child ref={parentRef} />
      <button onClick={getFocus}>获取焦点</button>
    </>
  );
};

export default ForwardRefDemo;
