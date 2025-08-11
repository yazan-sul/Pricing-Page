import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FooterSection } from "./components/FooterSection";
import { Form } from "./components/Form";
import { Navbar } from "./components/Navbar";
import { PricingSection } from "./components/PricingSection";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <h6>Pricing Tires</h6>
          <h1>Fit for all your needs</h1>
          <p>pick the plan that suits you today and set up as your demands grow - our flexible options have you journy mapped out</p>
          <button>monthly</button>
          <button>annuly</button>
          <div className='plans'>
            <PricingSection type='Basic' price={3.99} monthly={'monthly'}  most={false}/>
            <PricingSection type='Standard' price={6.99} monthly={'monthly'}  most={true}/>
            <PricingSection type='Premium' price={13.99} monthly={'monthly'}  most={false}/>
          </div>
        </div>
        <FooterSection/>
      </div>
    </div>
  );
}

export default App;
