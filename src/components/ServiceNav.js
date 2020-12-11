function ServiceNav() {
    return (
        <div className='service-page-box' id='service-page-nav'>
            <h3>SERVICES</h3>
            <div>
                <a href="service-shipping"><p className='service-page-nav-item'>
                    Shipping
                </p></a>
                <a href="service-warehouse"><p className='service-page-nav-item'>
                    Warehousing and Fulfilment
                </p></a>
                <a href="service-business" ><p className='service-page-nav-item'>
                    Business Solutions
                </p></a>
            </div>
        </div>
    )
}

export default ServiceNav
