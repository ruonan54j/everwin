import React, { useEffect, useState } from 'react'
import HeaderImage from './HeaderImage'
import ServiceNav from './ServiceNav'
import img1 from '../images/airfreight-banner.png'
import LoadingScreen from './LoadingScreen'

function Airfreight() {
    const [loading, setLoading] = useState(true)
    const loadcount = []

    useEffect(() => {
        var urls = [img1]
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
            {loading ? (
                <LoadingScreen />
            ) : (
                <div>
                    <HeaderImage
                        classStyle="airfreight-header"
                        text="AIRFREIGHT"
                    />
                    <div className="service-page row no-gutters">
                        <div className="service-L">
                            <ServiceNav active="airfreight" />
                        </div>

                        <div className="service-R">
                            <h2>Best-in-class Airfreight Service </h2>
                            <p>
                                EverWin delivers a best-in-class experience in
                                airfreight, offering customers granular and
                                end-to-end visibility, reliable service, and
                                customized, data- driven supply chain solutions.
                                <br />
                                <br />
                                Our network of BSAs and contracts with key
                                carriers means you’ll get consistent, premium,
                                best-in-class service with daily uplift
                                schedules to meet any transit time requirement
                                from Express to Deferred. Our capacity covers
                                all of the high demand trade lanes from Asia to
                                the US and Europe.
                                <br />
                                <br />
                                Our team features deep airline industry
                                expertise, which provides unique perspectives
                                and enables asset-supported solutions for cargo
                                transportation. Our global team is knowledgeable
                                in local regulations, compliance, and business
                                practices, providing valuable guidance and
                                consultation any time you need it.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Airfreight
