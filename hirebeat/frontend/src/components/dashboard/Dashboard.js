import React, { Component } from "react";
import ButtonPanel from "./panel/ButtonPanel";
import { Link } from "react-router-dom";
import EssentialUserInfo from "./essentials/EssentialUserInfo";
//import VideoPreviewList from "./videos/VideoPreviewList";
//import { Analytics } from "./videos/Analytics";
import { Interview } from "./videos/Interview";
import { Resume } from "./videos/Resume";
import { updateProfile, loadProfile } from "../../redux/actions/auth_actions";
import { connect } from "react-redux";
import { DbRow } from "./DashboardComponents";
import { DbCenterRow } from "./DashboardComponents";
import safariAlert from "../basic/SafariAlert";
import MediaQuery from 'react-responsive';
import PageTitleArea from '../Common/PageTitleArea';
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


export class Dashboard extends Component {
  componentDidMount() {
    safariAlert();
    this.props.loadProfile();
  }

  state = {
    subpage: "videos", // or analytics
  };

  renderVideos = () => {
    this.setState({
      subpage: "videos",
    });
  };

  /*renderAnalytics = () => {
    this.setState({
      subpage: "analytics",
    });
  };*/

  renderResume = () => {
    this.setState({
      subpage: "resume",
    });
  };
  renderSubpage = () => {
    switch (this.state.subpage) {
      case "videos":
        return <Interview />;
      //case "analytics":
        //return <Analytics />;
      case "resume":
        return <Resume />;
      default:
      //Do nothing
    }
  };

  render() {
    return (
      <React.Fragment>
        <ScrollToTopOnMount />
        {/* <div className="dashboard-container" style={{marginBottom:"10%", fontFamily:"Poppins"}}> */}
          <MediaQuery minDeviceWidth={1224}>
          <DbRow>
            <div className="col-12" style={{padding:"0%"}}>
              <div className="page-title-area">
                <div className="container">
                  <div className="page-title-content" style={{color:"#FFFFFF"}}>
                    <EssentialUserInfo
                      user={this.props.user}
                      profile={this.props.profile}
                      updateProfile={this.props.updateProfile}
                    />
                  </div>
                </div>
              </div>
            </div>
          </DbRow>
          <br />
          <br />
          <div className="container" style={{marginBottom:"0%"}}>
            <DbCenterRow>
              <div className="col-3" style={{marginBottom:"auto"}}>
                <ButtonPanel
                  profile={this.props.profile}
                  renderVideos={this.renderVideos}
                  renderProfile={this.renderProfile}
                  renderAnalytics={this.renderAnalytics}
                  renderResume={this.renderResume}
                  subpage={this.state.subpage}
                />
              </div>
              <div className="col-10" id="subpage_scroll_overflow" style={{marginBottom:"auto", height:"38rem"}}>{this.renderSubpage()}</div>
            </DbCenterRow>
          </div>
          </MediaQuery>
          {/*<MediaQuery maxDeviceWidth={1223}>
          <DbRow>
            <div className="col-12" style={{padding:"0%"}}>
              <div className="page-title-area">
                <div className="container">
                  <div className="page-title-content" style={{color:"#FFFFFF"}}>
                    <EssentialUserInfo
                      user={this.props.user}
                      profile={this.props.profile}
                      updateProfile={this.props.updateProfile}
                    />
                  </div>
                </div>
              </div>
            </div>
          </DbRow>
          <br />
          <br />
          <div className="container" style={{marginBottom:"0%"}}>
            <DbCenterRow>
              <div id="subpage_scroll_overflow" style={{marginBottom:"auto", height:"38rem"}}>{this.renderSubpage()}</div>
            </DbCenterRow>
          </div>
    </MediaQuery>*/}
          <MediaQuery maxDeviceWidth={1223}>
            <PageTitleArea
              pageTitle="Welcome to Hirebeat!"
              pageDescription="Our mobile functionality for interview practice is currently under construction, we apologized for the inconvenience.Please login on your PC to get the full experience."
            />
            <div style={{textAlign: "center"}}>
            <Link to="/">
              <a className="default-btn" style={{color:"white", backgroundColor:"#FF6B00", marginTop:"1rem",marginBottom:"1rem"}}>
                <i className="bx bxs-hot"></i>
                Back to Home Page
              </a>
            </Link>
            </div>
    </MediaQuery>
      {/* </div> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.auth_reducer.profile,
  user: state.auth_reducer.user,
});

export default connect(mapStateToProps, { loadProfile, updateProfile })(
  Dashboard
);
