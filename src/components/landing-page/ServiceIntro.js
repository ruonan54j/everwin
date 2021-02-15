import shipped from '../../images/shipped-icon.png'
import warehouse from '../../images/warehouse-icon.png'
import business from '../../images/business-icon.png'

function ServiceIntro() {
    return (
        <div id='service-landing'>
          <div className='d-flex justify-content-center'>
            <div className='service-box'>
              <img src={shipped} className="landing-boxes" />
              <h3>SHIPPING</h3>
              <p>143 countries</p>
            </div>
            <div className='service-box'>
              <img src={warehouse} className="landing-boxes-small" style={{marginBottom:'1em'}}/>
              <h3>WAREHOUSE AND FULLFILLMENT</h3>
            </div>
            <div className='service-box'>
              <img src={business} className="landing-boxes-small" style={{marginBottom:'1em'}}/>
              <h3>BUSINESS SOLUTIONS</h3>
              <p>24/7 support</p>
            </div>
          </div>
        </div>

    )
    
}

export default ServiceIntro