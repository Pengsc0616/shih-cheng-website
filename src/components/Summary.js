import React from 'react'

import SummaryContent from './SummaryContent'

export default class Summary extends React.Component {
    render() {
        return (
            <section id="summary-section" className="section-container">
                <div id="summary-container">
                    <div className="heading-container">
                        <h2 className="subheading">About Me</h2>
                        <h2 className="heading">Summary</h2>
                    </div>

                    <div id="summary-content">
                        <div className="timeline">
                            <SummaryContent
                                company='"This website is made by ReactJS, HTML5, and CSS3."'
                                company1=" "
                                company2="I am an undergraduate in the CS Department at National Chiao Tung University."
                                company3="Currently a wireless technical intern at Intel since July 2020."
                                company4="Passionate about software development and network programming."
                                company5="Also actively try different development boards and IoT environments."
                            />
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
