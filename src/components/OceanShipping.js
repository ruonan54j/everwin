import React, { useEffect, useState } from 'react'
import HeaderImage from './HeaderImage'
import ServiceNav from './ServiceNav'
import support from '../images/support.svg'
import efficiency from '../images/efficiency.svg'
import img1 from '../images/ocean-banner.png'
import LoadingScreen from './LoadingScreen'
function OceanShipping() {
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
                        classStyle="ocean-header"
                        text="OCEAN SHIPPING"
                    />
                    <div className="service-page row no-gutters">
                        <div className="service-L">
                            <ServiceNav active="ocean" />
                        </div>

                        <div className="service-R">
                            <h2>
                                Make us your trusted ocean freight forwarding
                                partner.
                            </h2>
                            <p>
                                EverWin is a trusted and dependable partner for
                                international ocean freight forwarding by its
                                valued clients. Through our global
                                transportation network and overseas logistics
                                partners, we ship all commodities - including
                                temperature controlled and dangerous goods. We
                                offer charters for very large or specialty
                                cargo, provide 24 hour customer support team,
                                and much more.
                                <br />
                                <br />
                                Everything from simple FCL shipping to splitting
                                LCL shipments. We work with top carriers to
                                secure you reliable space at competitive rates.
                            </p>
                            <div className="row">
                                <div className="col">
                                    <img
                                        src={support}
                                        className="services-icons"
                                        alt="support"
                                    />

                                    <p className="sub-page-icon-text">
                                        Get Real-Time Visibility and Sail With
                                        Trusted Partners Service With Human
                                        Support
                                    </p>
                                </div>
                                <div className="col">
                                    <img
                                        src={efficiency}
                                        className="services-icons"
                                        alt="support"
                                    />
                                    <p className="sub-page-icon-text">
                                        Efficient Ocean
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default OceanShipping
