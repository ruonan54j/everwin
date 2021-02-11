function ServiceNav() {
    return (
        <div className="service-page-box" id="service-page-nav">
            <h3>SERVICES</h3>
            <div>
                <a href="shipping">
                    <p className="service-page-nav-item">Shipping</p>
                </a>
                <a href="warehouse">
                    <p className="service-page-nav-item">
                        Warehouse and Fulfilment
                    </p>
                </a>
                <a href="business-solutions">
                    <p className="service-page-nav-item">Business Solutions</p>
                </a>
                <a href="ocean-shipping">
                    <p className="service-page-nav-item">Ocean Shipping</p>
                </a>
                <a href="airfreight">
                    <p className="service-page-nav-item">Air Freight</p>
                </a>
            </div>
        </div>
    )
}

export default ServiceNav
