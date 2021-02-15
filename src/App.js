import Landing from './components/landing-page/Landing'
import CustomNav from './components/CustomNav'
import Footer from './components/Footer'
import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Services from './components/Services'
import Shipping from './components/Shipping'
import WarehouseAndFulfillment from './components/WarehouseAndFulfillment'
import BusinessSolutions from './components/BusinessSolutions'
import FormSubmit from './components/FormSubmit'
import OceanShipping from './components/OceanShipping'
import Airfreight from './components/Airfreight'
import LoadingScreen from './components/LoadingScreen'
import FormToggle from './components/FormToggle'

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <React.Fragment>
            {!loading ? (
                <>
                    <CustomNav />
                    <Switch>
                        <div className="content">
                            <Route path="/" component={Landing} exact />
                            <Route path="/about" component={About} exact />
                            <Route
                                path="/service-shipping"
                                component={Shipping}
                                exact
                            />
                            <Route
                                path="/service-warehouse"
                                component={WarehouseAndFulfillment}
                                exact
                            />
                            <Route
                                path="/service-airfreight"
                                component={Airfreight}
                                exact
                            />
                            <Route
                                path="/service-ocean-shipping"
                                component={OceanShipping}
                                exact
                            />
                            <Route
                                path="/service-business-solutions"
                                component={Services}
                                exact
                            />
                            <Route
                                path="/form-submit"
                                component={FormSubmit}
                                exact
                            />
                        </div>
                    </Switch>
                    <FormToggle />
                    <Footer />
                </>
            ) : (
                <LoadingScreen />
            )}
        </React.Fragment>
    )
}

export default App
