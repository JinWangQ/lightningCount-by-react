import React, {
  Component
} from 'react';
import lightning from './lightning.png';
import './App.css';


class LighteningCounter extends Component {
  constructor(props) {
    super(props);
    //ES6: set initial states here
    this.state = {
      strikes: 0
    };
    this.timerTick = this.timerTick.bind(this);
  }

  timerTick() {
    this.setState({
      strikes: this.state.strikes + 100
    });
  }

  componentDidMount() {
    // set Interval here
    setInterval(this.timerTick, 1000);

  }

  render() {
    let counterStyle = {
      color: "#66ffff",
      fontSize: 50
    };
    let count = this.state.strikes.toLocaleString();
    return (
      <h1 style={counterStyle}>{count}</h1>
    );
  }
}

class LighteningCounterDisplay extends Component {
  constructor(props) {
    super(props);
    //set initial states here
    this.state = {
      left: 40,
      top: 40
    };
    this.lightningShift = this.lightningShift.bind(this);
  }

  lightningShift() {
    this.setState({
      left: Math.random() * 280,
      top: Math.random() * 280
    });
  }
  componentDidMount() {
    setInterval(this.lightningShift, 2000);
  }
  render() {
    let commonStyle = {
      margin: 0,
      padding: 0
    }
    let disStyle = {
      width: 250,
      textAlign: "center",
      backgroundColor: "black",
      padding: 40,
      fontFamily: "sans-serif",
      color: "#999",
      borderRadius: 10
    }
    let textStyle = {
      emphasis: {
        fontSize: 38,
        ...commonStyle
      },
      smallEmphasis: {
        ...commonStyle
      },
      small: {
        fontSize: 17,
        opacity: 0.5,
        ...commonStyle
      }
    }
    let lightningStyle = {
      width: 48,
      height: 48,
      position: "absolute",
      left: this.state.left,
      top: this.state.top
    }
    return (
      <div style={disStyle}>
          
          <div style={lightningStyle}>
            <img src={lightning} alt="lightning" />
          </div>
          <LighteningCounter />
          <h2 style={textStyle.smallEmphasis}>
            Lightning strikes on
          </h2>
          
          <h2 style={textStyle.emphasis}>
            Our Earth
          </h2>

          <p style={textStyle.smallEmphasis}>
            (from the component was loaded)
          </p>
          <p style={textStyle.smallEmphasis}>
            see <a href="https://www.lightningmaps.org">real-time Lightning Map</a>
          </p>
          
      </div>
    );
  }
}



export default LighteningCounterDisplay;