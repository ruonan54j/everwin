import React, { useState, useEffect } from 'react'
import GetQuoteBox from './GetQuoteBox'
import HeaderImage from './HeaderImage'
import ServiceNav from './ServiceNav'

function Shipping() {
    return (
    <div>
        <HeaderImage classStyle="shipping-header" text="SHIPPING" />
        <div className="service-page row no-gutters">
            <div className="service-L">
                <GetQuoteBox />
                <ServiceNav />
            </div>

            <div className="service-R">
                <h2>
                    Make your trusted ocean freight forwarding partner.{' '}
                </h2>
                <p>
                    Everwin is a trusted and dependable partner for
                    international ocean freight forwarding by its valued
                    clients. Through our global transportation network and
                    overseas logistics partners, we ship all commodities -
                    including temperature controlled and dangerous goods. We
                    offer charters for very large or specialty cargo,
                    provide 24 hour customer support team, and much more.{' '}
                    <br />
                    <br />
                    Everwin provides worldwide logistical services to
                    facilitate the worldwide shipment of your sea and air
                    freight. Below are some of the different areas we
                    service for shipping your cargo by sea and air..... (to
                    be filled)
                </p>
                <div className="row no-gutters">
                    <div className="col-sm">
                        <h3>Courier</h3>
                        <ul>
                            <li>
                                <p>
                                    Everwin courier , China – Canada traffic
                                </p>
                            </li>
                            <li>
                                <p>
                                    Fedex, UPS, DHL, integrate service
                                    provider accounts.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <h3>Mailing</h3>
                        <ul>
                            <li>
                                <p>
                                    Post service with coordinate multiple
                                    States
                                </p>
                            </li>
                            <li>
                                <p>Posts</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-sm">
                        <h3>Customs brokage</h3>
                        <ul>
                            <li>
                                <p>
                                    Professional team with decades
                                    experience of liaison with Customs
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <h3>Local transport</h3>
                        <ul>
                            <li>
                                <p>
                                    Dedicated Service – Trucking, Van, Motor
                                </p>
                            </li>
                            <li>
                                <p>FTL</p>
                            </li>
                            <li>
                                <p>LTL</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Shipping