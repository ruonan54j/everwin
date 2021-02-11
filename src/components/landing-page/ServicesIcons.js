import ship from '../../images/cruise.svg'
import plane from '../../images/airplane.svg'
import truck from '../../images/truck.svg'
import warehouse from '../../images/warehouse.svg'
import broker from '../../images/broker.svg'
import deliveryMan from '../../images/delivery-man.svg'

function ServicesIcons() {
    return (
        <div id="services-icons-section">
            <h2>OUR SERVICES</h2>
            <div className="row">
                <div className="col service-card">
                    <img src={ship} className="services-icons" alt="ship" />
                    <h3>Ocean Shipping</h3>
                    <p>
                        EVERWIN specializes in international air, ocean postal
                        and e-Commerce projects involving cargo and freight
                        forwarding. It is a company...
                    </p>
                </div>
                <div className="col service-card">
                    <img src={plane} className="services-icons" alt="plane" />
                    <h3>Airfreight</h3>
                    <p>
                        EVERWIN specializes in international air, ocean postal
                        and e-Commerce projects involving cargo and freight
                        forwarding. It is a company...
                    </p>
                </div>
                <div className="col service-card">
                    <img src={truck} className="services-icons" alt="truck" />
                    <h3>Ground Transportation</h3>
                    <p>
                        EVERWIN specializes in international air, ocean postal
                        and e-Commerce projects involving cargo and freight
                        forwarding. It is a company...
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col service-card">
                    <img
                        src={warehouse}
                        className="services-icons"
                        alt="warehouse"
                    />
                    <h3>Warehousing and Fulfillment</h3>
                    <p>
                        EVERWIN specializes in international air, ocean postal
                        and e-Commerce projects involving cargo and freight
                        forwarding. It is a company...
                    </p>
                </div>
                <div className="col service-card">
                    <img src={broker} className="services-icons" alt="broker" />
                    <h3>Custom Broker</h3>
                    <p>
                        EVERWIN specializes in international air, ocean postal
                        and e-Commerce projects involving cargo and freight
                        forwarding. It is a company...
                    </p>
                </div>
                <div className="col service-card">
                    <img
                        src={deliveryMan}
                        className="services-icons"
                        alt="delivery man"
                    />
                    <h3>Last Mile Delivery</h3>
                    <p>
                        EVERWIN specializes in international air, ocean postal
                        and e-Commerce projects involving cargo and freight
                        forwarding. It is a company...
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServicesIcons
