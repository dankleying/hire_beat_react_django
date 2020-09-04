import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {register} from "../../redux/actions/auth_actions";
import {createMessage} from "../../redux/actions/message_actions";
import SocialButtons from "./SocialButtons";
import MediaQuery from 'react-responsive';
import { useEffect } from "react";
import badge from '../../assets/badge-30.svg';
import leftbg from '../../assets/Login.png';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    createMessage: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.passwordsMatch()) {
      this.props.register(
          this.state.username,
          this.state.email,
          this.state.password
      );
    }
  };

  passwordsMatch = () => {
    if (this.state.password !== this.state.password2) {
      this.props.createMessage({passwordsNotMatch: "Passwords don't match"});
      return false;
    }
    return true;
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {username, email, password, password2} = this.state;
    if (this.props.auth.isAuthenticated) {
      return <Redirect to="/practice"/>;
    }
    return (
        <React.Fragment>
          <ScrollToTopOnMount />
          <div>
            <MediaQuery minDeviceWidth={1224}>
            <section className="signup-area">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0"> 
                      <img src={leftbg}></img>
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="signup-content" style={{marginTop:"3rem"}}>
                                    <div className="signup-form">
                                      <div>
                                        <h3 style={{color:"#56a3fa"}}><b>Start your career with HireBeat</b></h3>
                                      </div>

                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Username/Email"
                            onChange={this.onChange}
                            value={username}
                            style={{
                              background: "#FFFFFF",
                              border: "1px solid #E5E5E5",
                              borderRadius: "5px",
                              paddingLeft: "1rem",
                            }}
                            required
                        />
                      </div>

                      <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            required
                            onChange={this.onChange}
                            style={{
                              background: "#FFFFFF",
                              border: "1px solid #E5E5E5",
                              borderRadius: "5px",
                              paddingLeft: "1rem",
                            }}
                            value={email}/>
                      </div>

                      <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.onChange}
                            value={password}
                            placeholder="Create Password"
                            minLength="8"
                            style={{
                              background: "#FFFFFF",
                              border: "1px solid #E5E5E5",
                              borderRadius: "5px",
                              paddingLeft: "1rem",
                            }}
                            required/>
                      </div>

                      <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            name="password2"
                            onChange={this.onChange}
                            value={password2}
                            placeholder="Confirm Password"
                            minLength="8"
                            style={{
                              background: "#FFFFFF",
                              border: "1px solid #E5E5E5",
                              borderRadius: "5px",
                              paddingLeft: "1rem",
                            }}
                            required/>
                      </div>

                      <p className="d-flex text-muted justify-content-end"
                         style={{
                           fontWeight: "70"
                         }}>
                        Have an account?
                        <a href="/login"
                           className="active d-flex ml-2"
                           style={{
                             textDecoration: "underline",
                             color: "orange"
                           }}>
                          Log in
                        </a>
                      </p>

                      <br/>

                      <div className="form-group">
                        <button
                            type="submit"
                            className="font-weight-bold navbar-font"
                            style={{
                              WebkitBorderRadius: "50px",
                              width: "100%",
                              height: "3rem",
                              color: "white",
                              background: "#FF6B00",
                              border: "none",
                              boxShadow: "0 0 8px #FF6B00",
                            }}
                        >
                          Register
                        </button>
                      </div>

                      <p className="d-flex flex-wrap justify-content-end font-weight-lighter"
                         style={{
                           fontSize: "0.9rem",
                           color: "grey",
                         }}>
                        I have read and agree to the
                        <a href="/term"
                           className="active d-flex ml-2"
                           style={{
                             textDecoration: "underline",
                             color: "orange"
                           }}>
                          Terms & Conditions
                        </a>
                      </p>

                      <hr className="style-four"
                          data-content="Or use"
                          style={{
                            marginTop:"4rem",
                          }}
                      />

                    </form>

                    <SocialButtons handleSocialLogin={this.handleSocialLogin}/>

                    <div>
                      <div>
                        <img src={badge} style={{width:"5.5rem", float:"left", marginRight:"1rem"}}/>
                        <div style={{paddingTop:"0.5rem", textAlign:"left"}}>
                        <a>Your purchase is backed by our 30 Day Money Back Guarantee. We stand behind our training 100%. If you aren’t thrilled with the improvement in your interviewing, just email us and we’ll immediately refund the purchase.</a>
                        </div></div>
                    </div>

                  </div>
                </div>
              </div>
              </div>
            </section>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224}>    
            <div id="login-intro"
                    style={{
                      background: "#56a3fa",
                      minHeight: "8rem"
                    }}>
              <div className="container"
                   style={{
                     paddingTop: "2rem"
                   }}>
                <h1 className="display-8 text-white text-center">
                  Start your career with the interview
                </h1>
                <h5 className="text-white text-center" style={{paddingBottom:"2rem"}}>
                  Join our AI-analysis interview platform to improve your performance.
                </h5>
              </div>
            </div>
            <section className="card border-bottom-0 shadow-none bg-white">
              <div className="card-body">
                <div className="row">
                  <div className="
                  col-lg-4 offset-lg-4
                  col-sm-6 offset-sm-3
              ">

                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <input
                            type="text"
                            className="form-control "
                            name="username"
                            placeholder="Username/Email"
                            onChange={this.onChange}
                            value={username}
                            style={{
                              background: "#FFFFFF",
                              border: "1px solid #E5E5E5",
                              borderRadius: "5px",
                              paddingLeft: "1rem",
                            }}
                            required
                        />
                      </div>

                      <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            required
                            onChange={this.onChange}
                            style={{
                              background: "#FFFFFF",
                              border: "1px solid #E5E5E5",
                              borderRadius: "5px",
                              paddingLeft: "1rem",
                            }}
                            value={email}/>
                      </div>

                      <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.onChange}
                            value={password}
                            placeholder="Create Password"
                            minLength="8"
                            style={{
                              background: "#FFFFFF",
                              border: "1px solid #E5E5E5",
                              borderRadius: "5px",
                              paddingLeft: "1rem",
                            }}
                            required/>
                      </div>

                      <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            name="password2"
                            onChange={this.onChange}
                            value={password2}
                            placeholder="Confirm Password"
                            minLength="8"
                            style={{
                              background: "#FFFFFF",
                              border: "1px solid #E5E5E5",
                              borderRadius: "5px",
                              paddingLeft: "1rem",
                            }}
                            required/>
                      </div>

                      <p className="d-flex text-muted justify-content-end"
                         style={{
                           fontWeight: "70"
                         }}>
                        Have an account?
                        <a href="/login"
                           className="active d-flex ml-2"
                           style={{
                             textDecoration: "underline",
                             color: "orange"
                           }}>
                          Log in
                        </a>
                      </p>

                      <br/>

                      <div className="form-group">
                        <button
                            type="submit"
                            className="font-weight-bold navbar-font"
                            style={{
                              WebkitBorderRadius: "50px",
                              width: "100%",
                              height: "3rem",
                              color: "white",
                              background: "#FF6B00",
                              border: "none",
                              boxShadow: "0 0 8px #FF6B00",
                            }}
                        >
                          Register
                        </button>
                      </div>

                      <p className="d-flex flex-wrap justify-content-end font-weight-lighter"
                         style={{
                           fontSize: "0.9rem",
                           color: "grey",
                         }}>
                        I have read and agree to the
                        <a href="/term"
                           className="active d-flex ml-2"
                           style={{
                             textDecoration: "underline",
                             color: "orange"
                           }}>
                          Terms & Conditions
                        </a>
                      </p>

                      <hr className="style-four"
                          data-content="Or use"
                          style={{
                            marginTop:"4rem",
                            marginBottom:"2rem"
                          }}
                      />

                    </form>

                    <SocialButtons handleSocialLogin={this.handleSocialLogin}/>

                  </div>
                </div>
              </div>

            </section>
            </MediaQuery>
          </div>

        </React.Fragment>

    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth_reducer,
});

export default connect(mapStateToProps, {register, createMessage})(Register);
