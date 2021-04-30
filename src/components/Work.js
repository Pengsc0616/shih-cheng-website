import React from 'react'

import WorkContent from './WorkContent'

export default class Work extends React.Component {
  render() {
    return (
      <section id="work-section" className="section-container">
        <div id="work-container">     
          <div className="heading-container">
            <h2 className="subheading">Experience</h2>
            <h2 className="heading">Work Experience</h2>
          </div>

          <div id="work-content">
            <div className="timeline">
              <WorkContent 
                company="Intel Corporation - CCG Wireless Team"
                job="Software Engineer Intern"
                descriptions={[
                  {
                    name: "Bluetooth 5.2 Advertisement Demonstration",
                    values: [
                      { name: "Implemented the latest BT LE Extended Advertising with 2x speed, 4x range, and 8x data size compared to Bluetooth 4."},
                      { name: "Built Windows API to interact with customized sender created by HCI commands."},
                      { name: "Using tools like Ellisys and BTVS to analyze data transferring."}
                    ]
                  },
                  {
                    name: "Building MicroAPITester for PIE",
                    values: [
                      { name: "Implemented the SDK APIs in a dynamic link library (DLL) for PIE (Intel® PROSet/Wireless WiFi Software extension)."},
                      { name: "Designed a user-level application to communicate with Intel® Dual Band Wireless-AC and Intel® Wireless-AC/AX products."},
                    ]
                  }
                ]}
                period="July 2020--June. 2021"
                location="Taipei, Taiwan"
              />

              <WorkContent 
                company="NCTU - High Speed Communication & Computing LAB"
                job="Undergraduate Research Assistant"
                descriptions={[
                  {
                    name: "Automatic Temperature Detection and Facial Recognition System",
                    values: [
                      { name: "Combined IoT and Network to create an abnormal temperature warning system." },
                      { name: "Using MLX90614 as a thermometer, JetBot performs the object following, OpenCV as a tracking system, and IoTTalk as a communication platform." }
                    ]
                  }                 
                ]}
                period="July 2019--June 2020"
                location="Taipei, Taiwan"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
