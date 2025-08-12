import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FooterSection } from "./components/FooterSection";
import { Form } from "./components/Form";
import { Navbar } from "./components/Navbar";
import { PricingSection } from "./components/PricingSection";
import { Address } from "./components/Addres";
import { TestimonialsCard } from "./components/TestimonialsCard";
import { TestimonialsSection } from "./components/TestimonialsSection";

function App() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <div>
      <Navbar />
      <div className="under-header">
        <h5>Pricing Tiers</h5>
        <h1>Fit for all your needs</h1>
        <p>
          pick the plan that suits you today and set up as your demands grow -
          our flexible options have you journy mapped out
        </p>
        <div className="billing-toggle">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={billingCycle === "monthly" ? "active" : ""}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={billingCycle === "yearly" ? "active" : ""}
          >
            Annually
          </button>
        </div>
      </div>
      <div className="plans">
        <PricingSection
          type="Basic"
          price={prices.Basic[billingCycle]}
          monthly={billingCycle}
        />
        <PricingSection
          type="Standard"
          price={prices.Standard[billingCycle]}
          monthly={billingCycle}
          most={true}
        />
        <PricingSection
          type="Premium"
          price={prices.Premium[billingCycle]}
          monthly={billingCycle}
        />
      </div>
      <div className="testimonials-section">
        
          <TestimonialsSection></TestimonialsSection>
      </div>
      <div className="address-form">
        <Address />
        <Form />
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
const prices = {
  Basic: { monthly: 9.99, yearly: 99.99 },
  Standard: { monthly: 19.99, yearly: 199.99 },
  Premium: { monthly: 29.99, yearly: 299.99 },
};
