function HowTo() {
    return (
        <div id='how-it-works-landing' className='d-flex justify-content-center'>
          <div id='how-it-works-LC'>
          <form id="how-form" action="/form-submit">
            <div className='row no-gutters'>
              <div className="form-group form-col">
                <label for="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" required/>
            </div>
              <div className="form-group form-col">
                <label for="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" required/>
            </div>
            </div>
            <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email" required/>
            </div>
            <div className="form-group">
                <label for="phone">Phone</label>
                <input type="text" className="form-control" id="phone" required/>
            </div>
            <button type="submit" className="theme-btn form-btn">GET QUOTE</button>
            </form>
          </div>
          <div id='how-it-works-RC'>
            <h2 id='how-it-works-title'>HOW IT WORKS</h2>
            <div className='row no-gutters instruction'>
              <h1 className='how-step'>01:</h1> 
              <h3 className='how-step-desc'>Fill out the form.</h3> 
            </div>
            <div className='row no-gutters instruction'>
              <h1 className='how-step'>02:</h1> 
              <div className='how-step-desc'>
                <h3>Get an instant quote.</h3>
                <p>
                  Once you enter your shipment information on our platform, you’ll be able to compare discounted shipping rates and transit times from different carriers on one page. You can also access other shipping services like air freight, Ocean freight, courier services, and other specialized shipping services.
                </p>
              </div> 
              
            </div>
            <div className='row no-gutters instruction'>
              <h1 className='how-step'>03:</h1> 
              <h3 className='how-step-desc'>Get instant message updates and one-on-one hospitality services.</h3> 
            </div>
          </div>
        </div>
      
    )
}

export default HowTo