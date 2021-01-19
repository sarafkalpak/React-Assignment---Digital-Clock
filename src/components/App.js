import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      display: new Date().toLocaleTimeString()
    };
  }
  componentDidMount() {
    console.log("mounted");
    this.intervalId = setInterval(
      () => this.setState({ display: new Date().toLocaleTimeString() }),
      1000
    );
  }

 

  componentWillUnmount() {
    console.log("unmounted");
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.display}</h3>
      </div>
    );
  }
}
// //     render() {

// //         return(
// //             <>
               
// //             </>
// //         )
// //     }
//     constructor() {
//         super();
//         this.state = { time: new Date() }; // initialise the state
//     }

//     componentDidMount() { // create the interval once component is mounted
//         this.update = setInterval(() => {
//             this.setState({ time: new Date() });
//         }, 1 * 1000); // every 1 seconds
//     }

//     componentWillUnmount() { // delete the interval just before component is removed
//         clearInterval(this.update);
//     }

//     render() {
//         const { time } = this.state; // retrieve the time from state

//         return (<div className="Clock">
//             <h1>Digital Clock</h1>
//             <h2>
//                 {/* print the string prettily */}
//                 {time.toLocaleTimeString()}
//             </h2>
//         </div>);
//     }
}


export default App;
