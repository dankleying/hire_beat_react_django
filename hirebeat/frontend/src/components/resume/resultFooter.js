import React, { Component } from 'react';
import { useEffect } from "react";
import {Link} from "react-router-dom";


class ResumeFooter extends Component {
    render() {
        return (
                <div className="container" style={{paddingTop:"10%", paddingBottom:"10%"}}>
                    <div className="col-12">
                        <div className="row">
                            <div className="article-image" style={{margin:"auto"}}>
                                <div className="contact-cta-box mwidth-200" style={{width:"110%"}}>
                                    <h3 className="quiz-title">Want to land your dream role? </h3>
                                        <p className="quiz-text">We are here to enhance your interview skills</p>
                                        <Link to="/register">
                                            <a className="default-btn" style={{color:"white", fontFamily:"Poppins"}}>
                                                Practice with HireBeat
                                            </a>
                                        </Link>
                                </div>
                                <Link to="/company" style={{textDecoration: "none"}}>
                                    <p style={{marginLeft:"9%"}} className="mode-col-text2">Explore more about HireBeat -></p>
                                </Link>
                            </div>    
                        </div>
                    </div>
                </div>
        );
    }
}

export default ResumeFooter;