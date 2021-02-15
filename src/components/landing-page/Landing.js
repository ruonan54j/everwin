import React, { useState, useEffect } from 'react'
import FormToggle from '../FormToggle'
import Main from './Main'
import ServiceIntro from './ServiceIntro'
import ServicesIcons from './ServicesIcons'

import WhoWeAre from './WhoWeAre'

function Landing() {
    return (
        <React.Fragment>
            <Main />
            <ServiceIntro />
            <WhoWeAre />
            <ServicesIcons />
        </React.Fragment>
    )
}

export default Landing
