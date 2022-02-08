//  React Hooks
// 函数组件 16.8
// 优点 - 解决类组件的哪些问题
// - 组件之间状态逻辑难复用  通过render props和HOC(高阶组件) 代码冗余
// - 趋向复杂难以维护  不同逻辑写在一个生命周期，同类逻辑出现的不同的生命周期，例如事件注册与卸载
// - this指向问题

// 不理解-怎么更容易复用代码
// 1. 每次调用useHook会生成一份独立的状态，函数的每次调用会开辟一份独立的内存空间
// 2. 可以在组件外部定义 状态 from useState 和副作用 useEffect

// 高阶组件缺点
// - 来源不清晰
// - 需要实例化父组件 代码量，性能
// - 依赖不清晰 隐式入参 看不到高阶组件的逻辑
// - 高阶组件太多，命名冲突
import React, { Component } from "react";
function HOCTable() {
  return function (WrappedComponent) {
    return class HOC extends Component {
      state = {
        tableProps: {},
      };
      render() {
        return <WrappedComponent tableProps={this.state.tableProps} />;
      }
    };
  };
}

@HOCTable()
class Demo extends Component {
  render() {
    console.log(this.props);
    return <div>111</div>;
  }
}

export default Demo;
