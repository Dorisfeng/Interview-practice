import React from "react";

const SliderLeft = () => {
  const a = 20;

  //   function test() {
  //     const b = a + 10;

  //     function innerTest() {
  //       const c = 10;
  //       console.dir(innerTest);
  //       return b + c;
  //     }

  //     return innerTest();
  //   }

  //   test();
  //   function f1() {
  //     var n = 999;
  //     function f2() {
  //       alert(n);
  //     }
  //     return f2;
  //   }
  //   var result = f1();
  //   result(); // 999
  //   function add(x) {
  //     return function _add(y) {
  //       console.dir(_add);
  //       return x + y;
  //     };
  //   }

  //   add(2)(3); // 5
  function New(func) {
    let res = {};
    if (func.prototype !== null) {
      res.__proto__ = func.prototype;
    }
    let ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
    if (
      (typeof ret === "object" || typeof ret === "function") &&
      ret !== null
    ) {
      return ret;
    }
    return res;
  }
  return <div>Copy</div>;
};
Array.prototype._map = function (fn, context) {
  let temp = [];
  if (typeof fn === "function") {
    let len = this.length;
    for (let i = 0; i < len; i++) {
      temp.push(fn.call(context, this[i], i, this));
    }
  } else {
    console.error("TypeError" + fn + "is not a function.");
  }
  return temp;
};

SliderLeft.propTypes = {};
export default SliderLeft;
