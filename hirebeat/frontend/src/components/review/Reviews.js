import React, { Component } from "react";
import { addVideoReviews } from "../../redux/actions/video_actions";
import { connect } from "react-redux";

export class Reviews extends Component {
  state = {
    // expert
    score: 0,
    postitiveAttitude: 0,
    communication: 0,
    detailOriented: 0,
    teamSpirit: 0,
    stressTolerance: 0,
    comments: "",
    // ai
    ai_score: 0,
    ai_positiveAttitude: 0,
    ai_communication: 0,
    ai_detailOriented: 0,
    ai_teamSpirit: 0,
    ai_stressTolerance: 0,
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  cancatenateScores = () => {
    var ans = "";
    ans += this.state.postitiveAttitude + ",";
    ans += this.state.communication + ",";
    ans += this.state.detailOriented + ",";
    ans += this.state.teamSpirit + ",";
    ans += this.state.stressTolerance;
    console.log(ans);
    return ans;
  };

  cancatenateAIScores = () => {
    var ans = "";
    ans += this.state.ai_postitiveAttitude + ",";
    ans += this.state.ai_communication + ",";
    ans += this.state.ai_detailOriented + ",";
    ans += this.state.ai_teamSpirit + ",";
    ans += this.state.ai_stressTolerance;
    console.log(ans);
    return ans;
  };

  // use async to make sure reviews are added before fetching the next video
  async doAsync(method1, method2) {
    await method1(
      // fake ai
      this.state.ai_score,
      this.cancatenateAIScores(),
      // real expert
      this.state.score,
      this.cancatenateScores(),
      this.state.comments,
      // video id
      this.props.videoID
    );
    method2();
  }

  submitReview = () => {
    this.doAsync(this.props.addVideoReviews, this.props.nextVideo);
  };

  scoreField = (title, name) => {
    return (
      <div>
        <label style={{ fontSize: "20px" }}>{title}</label>
        <input
          type="number"
          step="0.1"
          class="form-control"
          min="0"
          max="10"
          name={name}
          placeholder={title + " score"}
          onChange={this.handleInputChange}
          required="required"
        />
        <br />
      </div>
    );
  };

  expertReivews = () => {
    return (
      <div className="form-group">
        <h1>Expert Score</h1>
        {this.scoreField("Positive Attitude", "postitiveAttitude")}
        {this.scoreField("Communication", "communication")}
        {this.scoreField("Detail Oriented", "detailOriented")}
        {this.scoreField("Team Spirit", "teamSpirit")}
        {this.scoreField("Stress Tolerance", "stressTolerance")}
        {this.scoreField("Overall", "score")}
        <label>Comments</label>
        <textarea
          className="form-control"
          rows="5"
          spellCheck="true"
          placeholder="Comments here ..."
          name="comments"
          onChange={this.handleInputChange}
        />
      </div>
    );
  };

  aiReivews = () => {
    return (
      <div className="form-group">
        <h1>AI Score</h1>
        {this.scoreField("AI Positive Attitude", "ai_postitiveAttitude")}
        {this.scoreField("AI Communication", "ai_communication")}
        {this.scoreField("AI Detail Oriented", "ai_detailOriented")}
        {this.scoreField("AI Team Spirit", "ai_teamSpirit")}
        {this.scoreField("AI Stress Tolerance", "ai_stressTolerance")}
        {this.scoreField("AI Overall", "ai_score")}
      </div>
    );
  };

  render() {
    return (
      <div className="container" style={{ marginBottom: "10%" }}>
        <form>
          <fieldset>
            {this.props.needed_expert_review && !this.props.is_expert_reviewed
              ? this.expertReivews()
              : null}
            <br />
            <div className="line" />
            <br />
            {this.props.needed_ai_review && !this.props.is_ai_reviewed
              ? this.aiReivews()
              : null}
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.submitReview}
            >
              Submit
            </button>
            <br />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default connect(null, { addVideoReviews })(Reviews);
