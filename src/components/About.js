import lightbulb from '../images/lightbulb.png'
import mountains from '../images/mountains.png'
import collab from '../images/collab.png'
import HeaderImage from './HeaderImage'
import { useEffect, useState } from 'react'
import img1 from '../images/about-banner.png'
import img2 from '../images/about-img-1.jpg'
import img3 from '../images/about-img-2.jpg'
import LoadingScreen from './LoadingScreen'

function About() {
    const [loading, setLoading] = useState(true)
    const loadcount = []

    useEffect(() => {
        var urls = [img1, img2, img3]
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
        <>
            {!loading ? (
                <div>
                    <HeaderImage classStyle="about-header" text="ABOUT US" />
                    <div className="about-text">
                        <p>
                            Everwin Global Express Co.,Ltd established in 2016,
                            is a class A freight forwarding company approved by
                            CAAC as well NVOCC (NG190628-003) that it's
                            headquarter office in Shanghai. The company has
                            expanded its services all over the Asia Pacific
                            region and now to North America and Europe.
                            <br />
                            <br />
                            With our team of experts and 20 years plus of
                            industry experience, we can help formulate logistics
                            solutions catered to your needs. We have efficient
                            processes to ensure we are going above and beyond
                            for our clients. Whether its personal or for your
                            business, EVERWIN can help your achieve your goals
                            as quickly as possible, promising the best rates in
                            the industry.
                        </p>
                    </div>
                    <HeaderImage
                        classStyle="about-vision-image"
                        text="VISION STATEMENT"
                    />

                    <div className="about-text">
                        <p>
                            Your vision is our vision, and we believe that we
                            have the means of taking it further. <br />
                            <br /> We, are a youthful and energetic company, by
                            our professional and advantageous overall solutions,
                            the 20 plus employees with average of the annual
                            revenue is approximate 20 million USD. Our business
                            expands to the whole world by our network systems.{' '}
                            <br />
                            <br /> We are mainly focusing on the market for
                            Canada, USA, Latin America and Europe under ocean
                            and air freight services. Our team is full of the
                            member with professional Customer Services agents
                            and Operation agents who are working hard with
                            intelligence, passion. We stand our service as
                            24/7/365.
                        </p>
                    </div>
                    <HeaderImage classStyle="about-img" text="" />

                    <div id="phil-section">
                        <div id="phil-box" className="text-center">
                            <h1 id="phil-title">PHILOSOPHY</h1>
                            <div className="row">
                                <div className="col">
                                    <img
                                        src={lightbulb}
                                        className="landing-boxes-small"
                                    />
                                    <h3>Thinking limitless</h3>
                                </div>
                                <div className="col">
                                    <img
                                        src={collab}
                                        className="landing-boxes-small"
                                    />
                                    <h3>3P – People Partnership Performance</h3>
                                </div>
                                <div className="col">
                                    <img
                                        src={mountains}
                                        className="landing-boxes-small"
                                    />
                                    <h3>Moving Borderless</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="commitments" className="text-center">
                        <h1>Our Commitments</h1>
                        <div className="d-flex justify-content-center">
                            <h3 className="value">AVAILABLE</h3>
                            <h3 className="value">DYNAMIC</h3>
                            <h3 className="value">FLEXIBLE</h3>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h3 className="value">EFFICIENT</h3>
                            <h3 className="value">RELIABLE</h3>
                        </div>
                    </div>
                </div>
            ) : (
                <LoadingScreen />
            )}
        </>
    )
}

export default About
