import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
// 清除定时器
// const Demo = () => {
//   const [index, setIndex] = useState(0);
//   useEffect(() => {
//     let timer = setInterval(() => {
//       setIndex((prev) => prev + 1);
//       console.log("timer is running");
//     }, 1000);
//     return () => clearInterval(timer);
//   });
//   return (
//     <button
//       onClick={() =>
//         ReactDom.unmountComponentAtNode(document.getElementById("root"))
//       }
//     >
//       {index}
//     </button>
//   );
// };
// class RegularComponent extends React.Component {
//   render() {
//     console.log("RegularComponent");
//     return <div>{this.props.name}</div>;
//   }
// }
// class PureComponent extends React.PureComponent {
//   render() {
//     console.log("PureComponent");
//     return <div>{this.props.name}</div>;
//   }
// }

// class Demo extends React.Component {
//   state = {
//     name: "张三",
//   };
//   updateName = () => {
//     setInterval(() => this.setState({ name: "张三" }), 1000);
//   };
//   componentDidMount() {
//     this.updateName();
//   }
//   render() {
//     console.log("render");
//     return (
//       <div>
//         <div>{this.state.name}</div>
//         <RegularComponent name={this.state.name} />
//         <PureComponent name={this.state.name} />
//       </div>
//     );
//   }
// }

// class Demo extends React.Component {
//   state = {
//     name: "张三",
//     age: 18,
//     position: "web前端",
//   };
//   shouldComponentUpdate(nextProps, nextState) {
//     if (
//       nextState.name === this.state.name &&
//       nextState.age === this.state.age
//     ) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   changePosition = () => {
//     this.setState({ position: "web前端+1" });
//   };
//   render() {
//     console.log("render");
//     return (
//       <div>
//         <div>
//           <span>姓名</span>
//           <span>{this.state.name}</span>
//         </div>
//         <div>
//           <span>年龄</span>
//           <span>{this.state.age}</span>
//         </div>
//         <button onClick={this.changePosition}>修改职位</button>
//       </div>
//     );
//   }
// }
// const Demo = () => {
//   const [index, setIndex] = useState(0);
//   const [name, setName] = useState("张三");
//   useEffect(() => {
//     setInterval(() => {
//       setIndex((pre) => pre + 1);
//     });
//   });
//   return (
//     <div>
//       {index}
//       <Child name={name} />
//     </div>
//   );
// };
// const Child = React.memo((props) => {
//   console.log("child renderer");
//   return <div>{props.name}</div>;
// });

const Demo = () => {
  const [person, setPerson] = useState({
    name: "张三",
    age: 18,
    position: "web前端",
  });

  console.log("render");
  return (
    <div>
      <ShowPerson person={person} />
      <button onClick={() => setPerson({ ...person, position: "啦啦啦" })}>
        修改职位
      </button>
    </div>
  );
};
const compare = (prevProps, nextProps) => {
  if (
    prevProps.person.name === nextProps.person.name &&
    prevProps.person.age === nextProps.person.age
  ) {
    return true;
  }
};
const ShowPerson = React.memo(({ person }) => {
  console.log("child render");
  return (
    <>
      <div>
        <span>姓名</span>
        <span>{person.name}</span>
      </div>
      <div>
        <span>年龄</span>
        <span>{person.age}</span>
      </div>
    </>
  );
}, compare);

export default Demo;
