import React from "react";
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.click2 = this.click1.bind(this);
  }
  click1 = () => {
    let { num } = this.state;
    this.setState({ num: ++num }, () => {
      console.log(this.state.num);
    });
  };
  click3() {
    let { num } = this.state;
    this.setState({ num: ++num }, () => {
      console.log(this.state.num);
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.num}</div>
        {/* <button onClick={this.click1}>1</button>
        <br />
        <button onClick={this.click2}>2</button>
        <br />
        <button onClick={this.click3.bind(this)}>3</button>
        <br />
        <button onClick={() => this.click3()}>4</button> */}
        <Child onClick={() => this.click3()} />
      </div>
    );
  }
}

class Child extends React.PureComponent {
  render() {
    console.log("children");
    return <div onClick={this.props.onClick}>Child</div>;
  }
}
export default Demo;
