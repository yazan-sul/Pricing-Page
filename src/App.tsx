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
        <PricingSection />
        <Form />
        <FooterSection/>
      </div>
    </div>
  );
}

export default App;
