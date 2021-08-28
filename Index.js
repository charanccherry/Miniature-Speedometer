import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickAccelerateButton = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onClickApplyBrakeButton = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speed-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-head">
          Speed is
          <span> {speed} </span>mph
        </h1>
        <p className="speed-para"> Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-cont">
          <button
            onClick={this.onClickApplyBrakeButton}
            className="button2"
            type="button"
          >
            Apply Brakes
          </button>
          <button
            onClick={this.onClickAccelerateButton}
            className="button1"
            type="button"
          >
            Accelerate
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
