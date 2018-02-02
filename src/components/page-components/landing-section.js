import React from "react";

import "./landing-section.css";

export default class LandingSection extends React.Component {
  render() {
    let textAlign;
    let imageAlign;
    let sectionText;
    let sectionImage;

    if (this.props.show === "right") {
      textAlign = "left-section";
      imageAlign = "right-section";
    } else {
      textAlign = "right-section";
      imageAlign = "left-section";
    }

    if (this.props.order === "1") {
      sectionText = `How many applications does it take to land a job?
                    Just one. 
                    But let’s face it: many more will come first.

                    Apply Yourself will keep your job applications organized
                    and allow you to spend more time levelling up your skills!
                  `;
      sectionImage = "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=ee742bee0f10b97a9d117d410d4887c8";
    } else if (this.props.order === "2") {
      sectionText = `<p>Forget which cover letter you sent where?

                    <p>Track each step of the application process 
                    for each job, from resumes to interviews 
                    to job offers.</p>

                    <p>Compare your prospects to choose which job suites you best!</p>
                    `;
      sectionImage = `https://images.unsplash.com/photo-1503551723145-6c040742065b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=cfcb36b45801576b92d7a537edb53ac1`;
    }  
      else if (this.props.order === "3") {
      sectionText = `How’d that interview go?

                    Mark your progress on each job prospect
                    and find out where your weak points lie.

                    Then hone your skills to reach maximum potential and land your next job!
                    `;
      sectionImage = "https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=6227a3e0898cc8a411a8e10cdee75db4";
    } 

    return (
      <div className="landing-section">
        <div className={imageAlign} className="landing-image">
          <img src={sectionImage} />
        </div>
        <div className={textAlign} className="landing-text">
          <h2>{this.props.title}</h2>
          {sectionText}
        </div>
      </div>
    );
  }
}
