import React, { useEffect, useState } from 'react'
import HeaderImage from './HeaderImage'
import ServiceNav from './ServiceNav'
import img1 from '../images/warehouse-banner.png'
import LoadingScreen from './LoadingScreen'

function WarehouseAndFulfillment() {
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
                        classStyle="warehouse-header"
                        text="WAREHOUSE AND FULFILLMENT"
                    />
                    <div className="service-page row no-gutters">
                        <div className="service-L">
                            <ServiceNav active="warehouse" />
                        </div>

                        <div className="service-R">
                            <h2>
                                Streamlined and Comprehensive Warehousing and
                                Fulfillment Solution.
                            </h2>
                            <p>
                                EverWin Warehousing and Fulfillment provides a
                                complete shipping and logistics solution from
                                the factory floor to the customer door. We have
                                a dedicated team exclusively working with our
                                partners to ensure the highest quality level of
                                service and best pricing. We are meeting with
                                our partners regularly and building best
                                practices to move your goods faster and cheaper.
                                The benefits are passed on to you. It's like
                                having your own team making sure that every
                                shipment is handled in the most effective and
                                efficient way possible.{' '}
                            </p>
                            <div className="row">
                                <div className="col">
                                    <ul>
                                        <li>
                                            <p>
                                                Breaking down full pallets
                                                comprising of cases for shipment
                                                of individual cases
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Picking single items from cases
                                                or inner cases for shipment
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Pick single items from open
                                                cases or build full pallets to
                                                meet your fulfillment
                                                requirements
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul>
                                        <li>
                                            <p>Kitting</p>
                                        </li>
                                        <li>
                                            <p>Repackaging</p>
                                        </li>
                                        <li>
                                            <p>Relabeling</p>
                                        </li>
                                        <li>
                                            <p>Reverse Logistics (Returns)</p>
                                        </li>
                                        <li>
                                            <p>Drop Shipping</p>
                                        </li>
                                        <li>
                                            <p>Cross-docking</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                We also understand the demands of E-commerce and
                                offer same day shipping to our E-Commerce
                                customers.
                            </p>
                        </div>
                    </div>
                </div>
            )}{' '}
        </>
    )
}

export default WarehouseAndFulfillment
