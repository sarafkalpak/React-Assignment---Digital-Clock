import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

// //     render() {

// //         return(
// //             <>
               
// //             </>
// //         )
// //     }
    constructor() {
        super();
        this.state = { time: new Date() }; 
    }

    componentDidMount() { 
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000); 
    }

    componentWillUnmount() {
        clearInterval(this.update);
    }

    getTimeString() {
        const currTime = this.state.time;
        const [hours, minutes, seconds] = [currTime.getHours(), currTime.getMinutes(), currTime.getSeconds()];

        const amOrPm = hours >=12 ? "PM" : "AM";
        const twelveHourFormate = hours >= 12 ? hours-12 : hours;
        const hoursString = '' + twelveHourFormate;
        const minutesString = this.padNumberToTwoDigits(minutes);
        const secondsString = this.padNumberToTwoDigits(seconds);

        const timeString = `${hoursString }:${minutesString}:${secondsString} ${amOrPm}`;
        return timeString;
    }

    padNumberToTwoDigits(num) {
        // return (num < 10 ? ("0" + num) : ("" + num));
        return `${num < 10 ? "0" : ""}${num}`   //templeate string

    }

    render() {
        return (
            <div className="Clock">
                <h3 id="time">{this.getTimeString()}</h3>
            </div>
        );
    }
}


export default App;
