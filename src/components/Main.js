import React from 'react'

import Home from './Home'
import Summary from './Summary'
import Education from './Education'
import Skills from './Skills'
import Work from './Work'
import Projects from './Projects'
import Minecraft from './Minecraft'

export default class Main extends React.Component {

  render() {
    return (      
      <div>
        <div id="main-container" className="full-height">
          <Home />
          <Summary />
          {/* <Skills /> */}
          <Work />
          <Education />
          <Projects />
          {/* <Publications></Publications> */}
          {/* <Minecraft /> */}
        </div>
      </div>
    )
  }
}
