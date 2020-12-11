import React, { useState, useEffect } from 'react';
import Main from './Main'
import ServiceIntro from './ServiceIntro';
import HowTo from './HowTo';
import WhoWeAre from './WhoWeAre';

function Landing() {
  return (
    <React.Fragment>
      <Main />
      <ServiceIntro />
      <HowTo />
      <WhoWeAre />
    </React.Fragment>
  );
}
  
export default Landing;
  