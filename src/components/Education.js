import React from 'react'

import EducationContent from './EducationContent'

export default class Education extends React.Component {

  render() {
    return (      
      <section id="education-section" className="section-container">
        <div id="education-container">  
          <div className="heading-container">
            <h2 className="subheading">Education</h2>
            <h2 className="heading">Education</h2>
          </div>

          <div id="education-content">
            
            <EducationContent 
              school="National Chiao Tung University"
              degree="Bachelor of Science"
              department="Computer Science (GPA: 3.99/4.3)"
              descriptions={[
                "Undergraduate Research Assistant @ High Speed Communication & Computing LAB",
                "NCTU IEEE Eta Kappa Nu Honor Society Candidate",
                "Dean's list given by NCTU @ 2018"
              ]}
              period="Sep. 2017 - June 2021"
              location="Taipei, Taiwan"
            />
          </div>
        </div>
      </section>
    )
  }
}
