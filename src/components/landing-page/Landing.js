import React, { useState, useEffect } from 'react'
import FormToggle from '../FormToggle'
import LoadingScreen from '../LoadingScreen'
import Main from './Main'
import ServiceIntro from './ServiceIntro'
import ServicesIcons from './ServicesIcons'

import WhoWeAre from './WhoWeAre'
import img1 from '../../images/landing.png'
import img2 from '../../images/who-we-are.png'

function Landing() {
    const [loading, setLoading] = useState(true)
    const loadcount = []
    useEffect(() => {
        var urls = [img1, img2]
        urls.forEach((url) => {
            var img = new Image()
            img.onload = function () {
                loadcount.push(img)
                if (loadcount.length === urls.length) {
                    setLoading(false)
                }
            }
            img.src = url
            if (img.complete) img.onload()
        })
    }, [])

    return (
        <React.Fragment>
            {!loading ? (
                <>
                    <Main />
                    <ServiceIntro />
                    <WhoWeAre />
                    <ServicesIcons />
                </>
            ) : (
                <LoadingScreen />
            )}
        </React.Fragment>
    )
}

export default Landing
