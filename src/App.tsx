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

          <PricingSection type='basic' price={3} monthly={'monthly'}  most={true}/>
        </div>
        <FooterSection/>
      </div>
    </div>
  );
}

export default App;
