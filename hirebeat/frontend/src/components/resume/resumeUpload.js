import React, { Component } from 'react';
import ResumeResult from './resumeResult';
import ResultDetail from './resultDetail';
import ResultFooter from "./resultFooter";
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class ResumeUpload extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <ResumeResult />
                <ResultDetail />
                <ResultFooter />
            </React.Fragment>
        );
    }
}

export default ResumeUpload;