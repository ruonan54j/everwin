import Landing from './components/landing-page/Landing'
import CustomNav from './components/CustomNav'
import Footer from './components/Footer'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './components/About';
import Services from './components/Services';
import Shipping from './components/Shipping'
import FormSubmit from './components/FormSubmit'

function App() { 
  return (
    <React.Fragment>
      <CustomNav />
      <Switch>
        <div className='content'>
        <Route path="/" component={Landing} exact />
        <Route path="/about" component={About} exact />
        <Route path="/service-shipping" component={Shipping} exact />
        <Route path="/service-warehouse" component={Services} exact />
        <Route path="/service-business" component={Services} exact />
        <Route path="/form-submit" component={FormSubmit} exact />
        </div>
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
