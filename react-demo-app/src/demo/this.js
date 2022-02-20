Function.prototype.myCall = function (context) {
  context = context || window;
  let args = [...arguments].slice(1);
  let fnName = mySymbol(context);
  context[fnName] = this;
  let result = context[fnName](...args);
  delete context[fnName];
  return result;
};
Function.prototype.myApply = function (context) {
  context = context || window;
  let fnName = mySymbol(context);
  context[fnName] = this;
  let result;
  if (arguments[1]) {
    result = context[fnName](...arguments[1]);
  } else {
    return context[fnName]();
  }
  delete context(fnName);
  return result;
};

Function.prototype.myBind = function (context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  let self = this;
  // 绑定的时候传参
  let args = [...arguments].slice(1);
  return function () {
    // 支持科里化传参 调用的时候传参
    let newArg = [...arguments];
    return self.apply(
      self instanceof Fn ? new self(...arguments) : context,
      args.concat(...arguments),
      args.concat(newArg)
    );
  };
};
