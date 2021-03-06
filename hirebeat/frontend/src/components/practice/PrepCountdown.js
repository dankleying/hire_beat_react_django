import React, { Component } from "react";
import { CardButton, CardRow, StyledLink } from "./CardComponents";
//import NotePad from "./NotePad";

export class PrepCountdown extends Component {
  state = {
    timeRemain: 30,
    intervalID: 0,
  };

  componentDidMount() {
    this.startCountDown();
  }

  startCountDown = () => {
    var intervalID = setInterval(this.countDown, 1000);
    this.setState({ ...this.state, intervalID: intervalID });
  };

  countDown = () => {
    if (this.state.timeRemain > 0) {
      this.setState({
        ...this.state,
        timeRemain: this.state.timeRemain - 1,
      });
    } else {
      clearInterval(this.state.intervalID);
      this.props.finishCountdown();
    }
  };

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }

  render() {
    return (
      <div className="video-recorder-row">
        <div className="col-8">
          <div
            className={this.props.isAudio ? null : "prep-countdown-container"}
            style={{
              width: (this.props.isAudio) ? 400 : 520,
              height: (this.props.isAudio) ? 100 : 350,
              backgroundColor: "black",
              borderRadius: "0 0 8px 8px",
            }}
          >
            <br />
            { this.props.isAudio ? null : <br / >}
            <CardRow>
              <CardButton
                onTap={this.props.finishCountdown}
                textDisplayed={"Start Recording"}
                buttonWidth={"30%"}
                isAudio={this.props.isAudio ? true : false}
                fontFamily={"Avenir Next"}
              />
            </CardRow>
          </div>
          {/*this.props.isAudio ? <NotePad isAudio={this.props.isAudio} /> : null*/}
        </div>
        <div className="col-3" />
      </div>
    );
  }
}

export default PrepCountdown;
