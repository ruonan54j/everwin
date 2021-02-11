import Landing from './components/landing-page/Landing'
import CustomNav from './components/CustomNav'
import Footer from './components/Footer'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Services from './components/Services'
import Shipping from './components/Shipping'
import WarehouseAndFulfillment from './components/WarehouseAndFulfillment'
import BusinessSolutions from './components/BusinessSolutions'
import FormSubmit from './components/FormSubmit'
import OceanShipping from './components/OceanShipping'
import Airfreight from './components/Airfreight'

function App() {
    return (
        <React.Fragment>
            <CustomNav />
            <Switch>
                <div className="content">
                    <Route path="/" component={Landing} exact />
                    <Route path="/about" component={About} exact />
                    <Route path="/shipping" component={Shipping} exact />
                    <Route
                        path="/warehouse"
                        component={WarehouseAndFulfillment}
                        exact
                    />
                    <Route path="/airfreight" component={Airfreight} exact />
                    <Route
                        path="/ocean-shipping"
                        component={OceanShipping}
                        exact
                    />
                    <Route
                        path="/business-solutions"
                        component={Services}
                        exact
                    />
                    <Route path="/form-submit" component={FormSubmit} exact />
                </div>
            </Switch>
            <Footer />
        </React.Fragment>
    )
}

export default App
