import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {login, exchangeToken} from "../../redux/actions/auth_actions";
import {CardButton} from "../practice/CardComponents";
import SocialButtons from "./SocialButtons";

export class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  decideProvider = (provider) => {
    switch (provider) {
      case "facebook":
        return provider;
      case "google":
      case "linkedin":
        return provider + "-oauth2";
      default:
        // Do nothing
    }
  };

  handleSocialLogin = (user) => {
    console.log(user);
    var provider = this.decideProvider(user.provider);
    this.props.exchangeToken(user.token.accessToken, provider);
  };

  render() {
    if (this.props.isAuthenticated) {
      if (this.props.user.groups[0] == "reviewers") {
        return <Redirect to="/review"/>;
      } else {
        return <Redirect to="/"/>;
      }
    }
    const {username, password} = this.state;
    return (
        <React.Fragment>


          <div
              className="container-fluid bg-white p-0"
          >

            <header id="login-intro"
                    style={{
                      background: "linear-gradient(209.24deg, #4BADE4 0%, #4356F0 97.24%)",
                      minHeight: "25rem"
                    }}>

              <div className="container"
                   style={{paddingTop: "9rem"}}>

                <h1 className="display-4 text-white text-center">
                  Welcome back!
                </h1>

              </div>
            </header>

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
                            className="form-control"
                            name="username"
                            placeholder="Username"
                            onChange={this.onChange}
                            value={username}
                            style={{
                              background: "#FFFFFF",
                              border: "1px solid #E5E5E5",
                              borderRadius: "0.5rem",
                              paddingLeft: "1rem",
                            }}
                            required/>
                      </div>

                      <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            name="password"
                            onChange={this.onChange}
                            value={password}
                            style={{
                              background: "#FFFFFF",
                              border: "1px solid #E5E5E5",
                              borderRadius: "0.5rem",
                              paddingLeft: "1rem",
                            }}
                            required/>
                      </div>

                      <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <a
                            href="/register"
                            className="navbar-font"
                            style={{textDecoration: "underline", color: "#FF6B00", fontWeight: "300"}}
                        >
                          Create account
                        </a>

                        <a
                            href="/password_reset"
                            target="_blank"
                            className="navbar-font"
                            style={{
                              color: "#7D7D7D",
                              fontWeight: "300"
                            }}
                        >
                          Forget password?
                        </a>

                      </div>

                      <div
                          className="form-group"
                          style={{paddingTop: 30, paddingBottom: 20}}
                      >
                        <button
                            type="submit"
                            className="navbar-font"
                            style={{
                              WebkitBorderRadius: "3rem",
                              width: "100%",
                              height: "3rem",
                              color: "white",
                              background: "#FF6B00",
                              border: "none",
                              boxShadow: "0 0 0.5rem #FF6B00",
                            }}
                        >
                          Log in
                        </button>

                      </div>
                    </form>

                    <hr className="style-four"
                        data-content="Or use"
                        style={{
                          marginTop:"4rem",
                          marginBottom:"2rem"
                        }}
                    />


                    <SocialButtons handleSocialLogin={this.handleSocialLogin}/>

                  </div>
                </div>
              </div>

            </section>
          </div>

        </React.Fragment>

    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth_reducer.isAuthenticated,
  user: state.auth_reducer.user,
});

export default connect(mapStateToProps, {login, exchangeToken})(Login);
