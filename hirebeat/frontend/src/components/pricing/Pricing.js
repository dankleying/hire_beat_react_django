import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProfile } from "../../redux/actions/auth_actions";
import { createMessage } from "../../redux/actions/message_actions";
import { loadStripe } from '@stripe/stripe-js';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Redirect, Link } from 'react-router-dom'
import fbIcon from "./../../assets/facebook.png";
import liIcon from "./../../assets/linkedin.png";
import insIcon from "./../../assets/ins.png";

const stripePromise = loadStripe('pk_live_51H4wpRKxU1MN2zWM7NHs8vqQsc7FQtnL2atz6OnBZKzBxJLvdHAivELe5MFetoqGOHw3SD5yrtanVVE0iOUQFSHj00NmcZWpPd');

const basicDetail1 = "Save up to 5 video interviews";

const commonDetail1 = "Unlimited mock-interview practice";
const commonDetail2 = "Request AI analysis on your video interviews";
const commonDetail3 = "Request professional feedback from HR";
const commonDetail4 = "Review & replay interview performance";



const premiumDetail1 = "Unlimited saved videos monthly";
const premiumDetail2 = "Unlimited feedback monthly";


const BasicPrice = () => {
  return <p style={{ color: "#FF6B00", fontSize: 50 }}>$Free</p>;
};

const PremiumPrice = () => {
  return (
    <div className="d-flex">
      <p
        style={{
          color: "#FF6B00",
          fontSize: 50,
        }}
      >
        $19.99
      </p>
      <p style={{ color: "black", fontSize: 30, paddingTop: 20 }}>/mo</p>
    </div>
  );
};

const BasicDetails = () => {
  return (
    <div style={{ marginBottom: "34px" }}>
      <p className="text-muted">{commonDetail1}</p>
      <p className="text-muted">{commonDetail2}</p>
      <p className="text-muted">{commonDetail3}</p>
      <p className="text-muted">{commonDetail4}</p>
      <p className="text-muted d-flex justify-content-center">{basicDetail1}</p>
    </div>
  );
};

const PremiumDetails = () => {
  return (
    <div>
      <p className="text-muted">{commonDetail1}</p>
      <p className="text-muted">{commonDetail2}</p>
      <p className="text-muted">{commonDetail3}</p>
      <p className="text-muted">{commonDetail4}</p>
      <p className="text-muted">{premiumDetail1}</p>
      <p className="text-muted d-flex justify-content-center">{premiumDetail2}</p>
    </div>
  );
};

const PriceButton = (props) => {
  // onTap, textDisplayed
  return (
    <button
      style={{
        WebkitBorderRadius: "20px",
        background: "#FF6B00",
        border: "none",
        width: "80%",
        height: 40,
        marginTop: 50,
        padding: 0, // key to center text in button
      }}
      onClick={props.onTap}
    >
      <p
        style={{
          fontSize: "1vw",
          fontWeight: "bold",
          marginBottom: 0,
          color: "white",
        }}
      >
        {props.textDisplayed}
      </p>
    </button>
  );
};

const PriceCard = (props) => {
  var message = props.first ? "Default Plan" : "Upgrade successfully";
  const basic = () => {
    props.handleDefault();
    props.createMessage({ successMessage: message });
  };
  const upgrade = () => {
    props.handleUpgrade();
    //props.createMessage({ successMessage: message });
  };
  var basicSrc = "https://hirebeat-assets.s3.amazonaws.com/free.png";
  var premiumSrc = "https://hirebeat-assets.s3.amazonaws.com/premium.png";
  return (
    <div
      className="col-4"
      style={{
        borderRadius: "8px",
        marginLeft: props.first ? "10%" : 0,
        boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.15)",
        marginRight: props.first ? 0 : "10%",
        backgroundColor: "white",
        height: 650,
      }}
    >
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div style={{ marginBottom: 20, marginTop: 40 }}>
          <img
            src={props.first ? basicSrc : premiumSrc}
            width="80"
            height="80"
          />
        </div>
        <h2>{props.first ? "Basic" : "Premium"}</h2>
        <p className="text-muted">
          {props.first ? "Practice interview" : "Prepare for job seaking"}
        </p>
        {props.first ? <BasicPrice /> : <PremiumPrice />}
        {props.first ? <BasicDetails /> : <PremiumDetails />}
        {props.first ? (
          <PriceButton role="link" onTap={basic} textDisplayed={"Default Plan"} />
        ) : (
          <PriceButton role="link" onTap={upgrade} textDisplayed={"Purchase Now"} />
        )}
      </div>
    </div>
  );
};

export class Pricing extends Component {

  /*makeProfile = () => {
    return {
      user: this.props.user.id,
      id: this.props.profile.id,
      save_limit: 1000,
      membership: 'Premium',
    };
  };*/
  
  handleClickUpgrade = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: 'price_1H8WhZKxU1MN2zWMo3Cu8kLn', // Replace with the ID of your price
        quantity: 1,
      }],
      mode: 'subscription',
      successUrl: 'https://hirebeat.co/payment',
      cancelUrl: 'https://hirebeat.co/pricing',
      billingAddressCollection: 'auto',
      customerEmail: this.props.user.email,
    });
    error.message;
  };

  handleClickDefault = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: 'price_1H8WheKxU1MN2zWM2KELpMkC', // Replace with the ID of your price
        quantity: 1,
      }],
      mode: 'subscription',
      successUrl: 'https://hirebeat.co/payment',
      cancelUrl: 'https://hirebeat.co/pricing',
      billingAddressCollection: 'auto',
      customerEmail: this.props.user.email,
    });
    error.message;
  };

  handleUpgrade = () => {
    if(this.props.profile.membership == 'Premium'){
      confirmAlert({
        title: 'Premium Member Already',
        message: '',
        buttons: [
          {
            label: 'Sure'
          }
        ]
        });
    }else{
      this.handleClickUpgrade();
    }
    /*if(this.handleClickUpgrade()){
      var profile = this.makeProfile();
      this.props.updateProfile(profile);
    }*/
  };

  handleDefault = () => {
    this.handleClickDefault();
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          padding: 0,
          backgroundColor: "#FAFAFB",
          height: 900,
        }}
      >
        <div className="pricing-bg">
          <div
            className="container d-flex flex-column justify-content-center align-items-center"
            style={{ paddingTop: 50 }}
          >
            <h1 style={{ color: "white", marginBottom: 50 }}>
              Transparent & Simple Pricing
            </h1>
            <h4 style={{ color: "white", marginBottom: 50, fontSize: "20px" }}>
              Get unlimited interview analytics with any HireBeat plan. <br></br>
              <span className="d-flex justify-content-center">Try for free.</span>
            </h4>
            <div
              className="row d-flex justify-content-around"
              style={{ width: "100%" }}
            >
              <PriceCard
                first={true}
                createMessage={this.props.createMessage}
                handleDefault= {this.handleDefault}
              />
              <PriceCard
                first={false}
                createMessage={this.props.createMessage}
                handleUpgrade={this.handleUpgrade}
              />
            </div>
          </div>
        </div>
        <div className="row footer" style={{marginLeft: "0px", marginTop: "25%"}}>
          <div className="col footer-align">
            <Link style={{textDecoration: "none"}} to="/company" >
              <p style={{color: "#FFFFFF"}}>About</p>
            </Link>
            <Link style={{textDecoration: "none", marginLeft: "60px"}} to="/company" >
              <p style={{color: "#FFFFFF"}}>Contact</p>
            </Link>
            <Link style={{textDecoration: "none", marginLeft: "60px"}} to="/privacy" >
              <p style={{color: "#FFFFFF"}}>Privacy</p>
            </Link>
            <Link style={{textDecoration: "none", marginLeft: "60px"}} to="/term" >
              <p style={{color: "#FFFFFF"}}>Terms</p>
            </Link>
          </div>
          <div className="col footer-align">
            <button style={{outline: "none", border: "none", marginLeft:"20%", marginRight: "20px", borderRadius: "10px"}}>
              <img style={{height:"38px", width: "38px"}} src={fbIcon} alt="facebook icon"/>
            </button>
            <button style={{outline: "none", border: "none", marginRight: "20px", borderRadius: "10px"}}>
              <img style={{height:"38px", width: "38px"}} src={liIcon} alt="linkedin icon"/>
            </button>
            <button style={{outline: "none", border: "none", borderRadius: "10px"}}>
              <img style={{height:"38px", width: "38px"}} src={insIcon} alt="instagram icon"/>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth_reducer.user,
  profile: state.auth_reducer.profile,
});

export default connect(mapStateToProps, { updateProfile, createMessage })(
  Pricing
);

