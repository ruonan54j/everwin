function ServiceNav(props) {
    return (
        <div className="service-page-box" id="service-page-nav">
            <h3>SERVICES</h3>
            <div
                className={props.active === 'shipping' && 'service-box-active'}
            >
                <a href="service-shipping">
                    <p className="service-page-nav-item">Shipping</p>
                </a>
            </div>
            <div
                className={props.active === 'warehouse' && 'service-box-active'}
            >
                <a href="service-warehouse">
                    <p className="service-page-nav-item">
                        Warehouse and Fulfilment
                    </p>
                </a>
            </div>

            <div
                className={props.active === 'business' && 'service-box-active'}
            >
                <a href="service-business-solutions">
                    <p className="service-page-nav-item">Business Solutions</p>
                </a>
            </div>
            <div className={props.active === 'ocean' && 'service-box-active'}>
                <a href="service-ocean-shipping">
                    <p className="service-page-nav-item">Ocean Shipping</p>
                </a>
            </div>
            <div
                className={
                    props.active === 'airfreight' && 'service-box-active'
                }
            >
                <a href="service-airfreight">
                    <p className="service-page-nav-item">Air Freight</p>
                </a>
            </div>
        </div>
    )
}

export default ServiceNav
