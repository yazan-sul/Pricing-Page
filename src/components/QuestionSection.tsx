import { Quesitons } from "./Quesitons";

export function QuesitonSection() {
  function handleGetInTouch(){
    
  }
  return (
    <div>
      <div className="questions-app">
        <h1>Frequently asked questions</h1>
        <p>Choose any question you read</p>
        <Quesitons
          question="What forms of payment do you accept?"
          answer="We accept all major credit cards, including Visa, MasterCard, American Express, and Discover."
        />

        <Quesitons
          question="Can I cancel my subscription at any time?"
          answer="Yes, you can cancel your subscription at any time from your account settings. You’ll retain access until the end of your billing period."
        />

        <Quesitons
          question="Is there a free trial available?"
          answer="Yes, we offer a 14-day free trial for all new users. No credit card is required to get started."
        />

        <Quesitons
          question="Can I switch between plans later?"
          answer="Absolutely! You can upgrade or downgrade your plan at any time, and the changes will be reflected in your next billing cycle."
        />

        <Quesitons
          question="Do you offer discounts for annual billing?"
          answer="Yes, we offer a discounted rate if you choose to be billed annually instead of monthly."
        />

        <Quesitons
          question="Is my data secure with your service?"
          answer="Yes, we use industry-standard encryption and follow best practices to keep your data secure at all times."
        />

        <Quesitons
          question="Do you offer team or enterprise plans?"
          answer="Yes, we offer tailored solutions for teams and enterprises. Please contact our sales team for more details."
        />

        <Quesitons
          question="What happens if my payment fails?"
          answer="If a payment fails, you’ll receive a notification, and we’ll retry the payment. You’ll still have access for a grace period before any restrictions are applied."
        />
      </div>
      <div className="support-section">
        <div className="support-section-head">
          <h1>Can't find the answer you are looking for?</h1>
          <a href="#form" className="get-in-touch">Get in touch</a>

        </div>
        <p>Reach out the customer support</p>

      </div>
    </div>
  );
}
