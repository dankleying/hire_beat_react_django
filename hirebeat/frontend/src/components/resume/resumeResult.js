import React, { Component } from 'react';
import {FacebookShareButton,  LinkedinShareButton} from "react-share";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import {
  infillOverallData,
  deepCopyFunction,
} from "../../constants/constants";


const OverallScore = (props) => {
    var radialBarOptions =  infillOverallData(props.percent);

    radialBarOptions.options.plotOptions.radialBar.hollow = {
        size: "70%",
        margin: 0,
        background: "#cbdbfa"
    }

    return (
      <Chart
        options={radialBarOptions.options}
        series={radialBarOptions.series}
        type="radialBar"
        height={140}
        key={"overall"}
      />
    );
};

const ProgressScore = (props) => {
    //percent, height
    var scoreClassName = props.height == 30 ? "text-30 " : "text-15 ";
    if (props.percent > 8.5) {
      scoreClassName += "text-success";
    } else if (props.percent > 5) {
      scoreClassName += "text-primary";
    } else if (props.percent > 3) {
      scoreClassName += "text-warning";
    } else {
      scoreClassName += "text-danger";
    }
    return (
      <div className="d-flex align-items-end">
        <p className={scoreClassName}>{props.percent}</p>
        <p style={{ marginBottom: 5, fontSize: props.height / 1.5, fontWeight: "bold" }}>/10</p>
      </div>
    );
};

const ProgressBar = (props) => {
    // color, percent, height
    var barClassName =
      "progress-bar " +
      (props.color == "blue"
        ? "gradient-progress-blue"
        : "gradient-progress-orange");
    return (
      <div className="row d-flex align-items-center">
        <div className="col-10">
          <div
            className="progress"
            style={{ height: props.height, borderRadius: "20px" }}
          >
            <div
              className={barClassName}
              role="progressbar"
              style={{
                width: (props.percent * 10).toString() + "%",
              }}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="col-2">
          <ProgressScore percent={props.percent} height={props.height * 2} />
        </div>
      </div>
    );
};

class ResumeResult extends Component {
    render() {
        var score = 4.5
        return (
            <section className="funfacts-inner">
                <Link to="/pricing">
                    <p style={{color:"#FF6B00", fontSize:"12px"}}>back -></p>
                </Link>
                <div className="single-funfacts funfact-style-two">
                    <div className="row">
                        <div className="col-6">
                            <OverallScore percent={score}/>
                        </div>
                        <div className='col-6'>
                            <p className='resume-result-detail-text1'>YOUR RESULTS</p>
                            <h1 className='resume-result-detail-text2'>45% out of 100%</h1>
                            <p className='resume-result-detail-text1' style={{color: '#4A6F8A'}}>That's pretty good, but you can still make some improvements to boost your chances. We recommend reaching a score of 75 or higher before you apply. Scroll down to see our suggestions for making your resume more competitive.</p>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-lg-4 col-4 col-sm-12">
                        <div className="single-funfacts funfact-style-two">
                            <p className='resume-result-detail-text1' style={{fontWeight: '600'}}>ATS Findings</p>
                            <ProgressBar color={"blue"} height={7.5} percent={5} />
                        </div>
                    </div>

                    <div className="col-lg-4 col-4 col-sm-12">
                        <div className="single-funfacts funfact-style-two">
                            <p className='resume-result-detail-text1' style={{fontWeight: '600'}}>Recruiter Findings</p>
                            <ProgressBar color={"blue"} height={7.5} percent={5} />
                        </div>
                    </div>

                    <div className="col-lg-4 col-4 col-sm-12">
                        <div className="single-funfacts funfact-style-two">
                            <p className='resume-result-detail-text1' style={{fontWeight: '600'}}>Skills Match</p>
                            <ProgressBar color={"blue"} height={7.5} percent={5} />
                        </div>
                    </div>


                    <div className="col-lg-10 col-12 col-sm-12">
                        <div className="single-footer-widget1">
                            <ul className="row social">
                                <li className="col-lg-6">
                                   <p className='resume-result-detail-text1' style={{color: '#67A3F3'}}>SHARE WITH YOUR FRIENDS TO MATCH RESUME TOO!</p> 
                                </li>
                                <li className="col-lg-1">
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/resume"}
                                        quote={"Match Resume"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                </li>
                                <li className="col-lg-1">
                                    <LinkedinShareButton
                                        url={"https://hirebeat.co/resume"}
                                        title={"Match Resume"}
                                        source={"HireBeat"}>
                                        <a target="_blank">
                                            <i className="bx bxl-linkedin"></i>
                                        </a>
                                    </LinkedinShareButton>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ResumeResult;