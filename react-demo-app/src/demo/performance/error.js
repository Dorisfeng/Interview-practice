// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {}
//   render() {
//     throw new Error("lalala");
//     return (
//       <div>
//         <div>App works</div>
//         <button onClick={this.handleClick}>按钮</button>
//       </div>
//     );
//   }
// }
// export default class ErrorBoundaries extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       hasError: false,
//     };
//   }
//   static getDerivedStateFromError() {
//     console.log("getDerivedStateFromError");
//     return { hasError: true };
//   }
//   componentDidCatch(error) {
//     console.log("componentDidCatch", error);
//   }
//   render() {
//     if (this.state.hasError) {
//       return <div>出错了</div>;
//     }
//     return <App />;
//   }
// }
import { Component } from "react";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      man: {
        name: "张三",
        age: 18,
      },
    };
    this.setMan = this.setMan.bind(this);
  }

  setMan() {
    this.setState({
      ...this.state,
      man: {
        name: "李四",
      },
    });
  }
  render() {
    const { name, age } = this.state.man;
    return (
      <div>
        <p>
          {name}
          {age}
        </p>
        <button onClick={this.setMan}>修改</button>
      </div>
    );
  }
}
