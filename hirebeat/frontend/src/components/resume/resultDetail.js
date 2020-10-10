import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import {FacebookShareButton,  LinkedinShareButton} from "react-share";

class ResultDetail extends Component {
    render() {
        return (
            <section className="faq-area ptb-100" style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '5%'}}>
                <div className="container-fluid container" style={{ marginLeft: 'auto', marginRight: 'auto'}}>
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-2 col-md-12">
                            <ul className="list-group">  
                                <li class="list-group-item" style={{color:"#090D3A"}}>ATS Findings</li> 
                                <li class="list-group-item" style={{color:"#7d7d7d"}}>Recruiter Findings</li>
                                <li class="list-group-item" style={{color:"#7d7d7d"}}>Hard Skills Match</li>
                                <li class="list-group-item" style={{color:"#7d7d7d"}}>Soft Skills Match</li>
                                <li class="list-group-item" style={{color:"#7d7d7d"}}>Other Keywords</li>
                            </ul>
                        </div>
                        <div className="col-lg-10 col-10 col-md-12">
                            <div className="faq-accordion" style={{marginRight: 'auto'}}>

                                <h4 className='resume-result-detail-text3'>ATS Findings</h4>
                                <Accordion >
                                    <AccordionItem style={{marginBottom: '1px'}}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='row'>
                                                <div className='col-lg-4'>
                                                    <p>SKILLS AND KEYWORDS</p>
                                                    <i className='bx bxs-help-circle' style={{color: '#6FA8F3'}}></i>
                                                </div> 
                                                <div className='col-1g-1'>
                                                    <i className='bx bx-check' style={{color: 'green'}}></i>
                                                </div>
                                                <div className='col-lg-7'>
                                                    <p>You are missing 2 important high-value skills on your resume.
For example, startup appears on the job description 2 times and is not on your resume.</p>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    </AccordionItem>

                                    <AccordionItem style={{marginBottom: '1px'}}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='row'>
                                                <div className='col-lg-4'>
                                                    <p>SKILLS AND KEYWORDS</p>
                                                    <i className='bx bxs-help-circle' style={{color: '#6FA8F3'}}></i>
                                                </div> 
                                                <div className='col-1g-1'>
                                                    <i className='bx bx-x' style={{color: 'red'}}></i>
                                                </div>
                                                <div className='col-lg-7'>
                                                    <p>You are missing 2 important high-value skills on your resume.
For example, startup appears on the job description 2 times and is not on your resume.</p>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    </AccordionItem>

                                    <AccordionItem style={{marginBottom: '1px'}}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='row'>
                                                <div className='col-lg-4'>
                                                    <p>SKILLS AND KEYWORDS</p>
                                                    <i className='bx bxs-help-circle' style={{color: '#6FA8F3'}}></i>
                                                </div> 
                                                <div className='col-1g-1'>
                                                    <i className='bx bx-x' style={{color: 'red'}}></i>
                                                </div>
                                                <div className='col-lg-7'>
                                                    <p>You are missing 2 important high-value skills on your resume.
For example, startup appears on the job description 2 times and is not on your resume.</p>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    </AccordionItem>

                                    <AccordionItem style={{marginBottom: '1px'}}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='row'>
                                                <div className='col-lg-4'>
                                                    <p>SKILLS AND KEYWORDS</p>
                                                    <i className='bx bxs-help-circle' style={{color: '#6FA8F3'}}></i>
                                                </div> 
                                                <div className='col-1g-1'>
                                                    <i className='bx bx-x' style={{color: 'red'}}></i>
                                                </div>
                                                <div className='col-lg-7'>
                                                    <p>You are missing 2 important high-value skills on your resume.
For example, startup appears on the job description 2 times and is not on your resume.</p>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    </AccordionItem>

                                    <AccordionItem style={{marginBottom: '1px'}}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='row'>
                                                <div className='col-lg-4'>
                                                    <p>SKILLS AND KEYWORDS</p>
                                                    <i className='bx bxs-help-circle' style={{color: '#6FA8F3'}}></i>
                                                </div> 
                                                <div className='col-1g-1'>
                                                    <i className='bx bx-x' style={{color: 'red'}}></i>
                                                </div>
                                                <div className='col-lg-7'>
                                                    <p>You are missing 2 important high-value skills on your resume.
For example, startup appears on the job description 2 times and is not on your resume.</p>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    </AccordionItem>
                                </Accordion>
                                <div className="col-lg-12 col-12 col-sm-12">
                                    <div className="single-footer-widget1">
                                        <ul className="row social">
                                            <li className="col-lg-8">
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
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ResultDetail;