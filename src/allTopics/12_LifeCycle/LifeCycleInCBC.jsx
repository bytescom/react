import { Component } from "react";

export default class LifeCycleInCBC extends Component {
  constructor() {
    super();
    console.log("I am contructor");
    this.state = { count: 0 };
  }

  increment = () => this.setState({ count: this.state.count + 1 });

  componentDidMount() {
    console.log("I am componentDidMount");
    this.intervalId = setInterval(() => {
      console.log("API CALLED");
    }, 2000);
  }

  componentDidUpdate() {
    console.log("component Updated");
  }

  componentWillUnmount() {
    console.log("Component is going to unmount");
    clearInterval(this.intervalId);
  }

  render() {
    console.log("I am render");
    return (
      <div>
        <h1>Count is {this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}


/**
 * @ques remaining when click event happend, componentsdidupdate runs but
 * 
 *  componentWillUnmount(){
        console.log("components is going to unmount");
        clearInterval(this.intervalID);
    }

    this is not run why??? 
  
  @ans It runs when component will dead or not used, remove the component.
 */