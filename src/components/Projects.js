import React, { Component } from 'react'

import PublicationContent from './PublicationContent'
import ProjectContent from './ProjectContent'
import BTReport from '../assets/files/BTReport.pdf'
import WIFIReport from '../assets/files/WIFIReport.pdf'

export default class Projects extends Component {

  render() {
    return (
      <section id="projects-section" className="section-container">
        <div id="projects-container">       
          <div className="heading-container">
            <h2 className="subheading">My Work</h2>
            <h2 className="heading">Course & Project Experience</h2>
          </div>

          {/* <div id="publications-content"> */}
            {/* <div> */}
              {/* <h3>Publications</h3> */}
            {/* </div> */}
            {/* <PublicationContent */}
              {/* index="0" */}
              {/* title="Element-Embedded Style Transfer Networks for Style Harmonization" */}
              {/* abstract={ */}
                {/* "Neural image style transfer has been receiving increasing attention on the creation of artistic images. Given a reference image with style of interest, image style harmonization aims to blend an element from one image into this reference, achieving harmonization for the stylized output. We present an Element-Embedded Style Transfer Network (E2STN) for addressing this task. Our proposed network uniquely integrates style transfer and image matting modules. Together with global and local discriminators, both context and style information can be properly preserved in the embedded output. In the experiments, we show that our proposed network performs favorably against existing style transfer models and is able to produce results with satisfactory quality." */}
              {/* } */}
              {/* link="https://bmvc2019.org/wp-content/uploads/papers/0425-paper.pdf" */}
              {/* media_name="E2STN" */}
            {/* /> */}
          {/* </div> */}
          
          <div id="projects-content">
            <div>
              <h3>Projects</h3>
            </div>

            <ProjectContent
              index="0"
              title="Bluetooth 5.2 Advertisement Demonstration"
              descriptions={[
                "Implemented the latest BT LE Extended Advertising with 2x speed, 4x range, and 8x data size compared to Bluetooth 4.",
                "Built Windows API to interact with customized sender created by HCI commands",
                "Using tools like Ellisys and BTVS to analyze data transferring."
              ]}
              link={BTReport}
              media_type="image"
              media_name="address_spell_checker"
            />

            <ProjectContent
              index="1"
              title="Building MicroAPITester for PIE"
              descriptions={[
                "Implemented the SDK APIs in a dynamic link library (DLL) for PIE (Intel® PROSet/Wireless WiFi Software extension).",
                "Designed a user-level application to communicate with Intel® Dual Band Wireless-AC and Intel® Wireless-AC/AX products."
              ]}
              link={WIFIReport}
              media_type="image"
              media_name="anime_gan"
            />

            <ProjectContent
              index="2"
              title="Automatic Temperature Detection and Facial Recognition Syste"
              descriptions={[
                "HIGH SPEED COMMUNICATION & COMPUTING LABORATORY --- LINUX, PYTHON, OPENCV, ROS",
                "Combined IoT and Network to create an abnormal temperature warning system.",
                "Using MLX90614 as a thermometer, JetBot performs the object following, OpenCV as a tracking system, and IoTTalk as a communication platform."
              ]}
              link="https://www.youtube.com/watch?v=LiUK_TaD4uo&t=1s"
              media_type="image"
              media_name="anime_gan"
            />

            <ProjectContent
              index="3"
              title="Real Estate Market Query System"
              descriptions={[
                "INTRODUCTION TO DATABASE SYSTEM --- MYSQL, PYTHON, JS, PHP, HTML ",
                "Created a website where users could visualize trends in the housing market by looking at real-estate transaction history.",
                "Using Apache Server to execute PHP and interact with users by providing HTML and receiving users’ input."
              ]}
              link="https://github.com/Pengsc0616/database_house_price"
              media_type="image"
              media_name="stroke_stylization"
            />
            <ProjectContent
              index="4"
              title="Battleship Game with IoT"
              descriptions={[
                "DESIGN AND IMPLEMENT OF IOT APPLICATIONS --- JS, JQUERY, CSS, HTML, PYTHON",
                "Created a game combining IoT and Battleship. ",
                "Two players take turns guessing the position of the opponent's warship through IoTTalk Platform with low latency."
              ]}
              link="https://github.com/Pengsc0616/IoT-Final-Project"
              media_type="image"
              media_name="stroke_stylization"
            />
            <ProjectContent
              index="5"
              title="Synopsys-ARC IOTDK / IoTTalk Application Design & Implementation"
              descriptions={[
                "DESIGN AND IMPLEMENT OF IOT APPLICATIONS, INTERNET OF THINGS BASIC DESIGN AND IMPLEMENTATION --- C, PYTHON, JS",
                "Implemented IOT peripheral sensor and wireless communication device in ESP8266, Raspberry Pi, and ARC IOTDK embedded development board."
              ]}
              link="https://google.com"
              media_type="image"
              media_name="stroke_stylization"
            />
            <ProjectContent
              index="6"
              title="Robot Operating System (ROS 1 & 2)"
              descriptions={[
                "TAOYUAN ROS SUMMER COURSE AND COMPETITION --- PYTHON",
                "Designed system for operating robots with multiple models and implemented SLAM and automatic navigation system for robots."
              ]}
              link="https://google.com"
              media_type="image"
              media_name="stroke_stylization"
            />
            <ProjectContent
              index="7"
              title="Music App Pitch Deck Business Proposal"
              descriptions={[
                "TECHNOLOGY ENTREPRENEURSHIP",
                "Proposed Music App Pitch Deck (MAPD), a platform to simplify the procedure of music companies authorize the right of songs to music streaming media.",
                "Using Blockchain to achieve timely distribution of profit and information transparency."
              ]}
              link="https://google.com"
              media_type="image"
              media_name="stroke_stylization"
            />

          </div>
        </div>
      </section>
    )
  }
}
