import React from "react";
type props = {
  most?: boolean;
  price: number;
  monthly: 'monthly' | 'yearly';
  type: 'Basic' | 'Premium' | 'Standard';
};
export function PricingSection({ price, monthly, type, most }: props) {
  const plan = PLANS[type];
  return (
    <div className={`price-card ${most ? 'price-card-most' : ''}`}>
        {most && <h3 className="most-populer">Most Populer</h3>}
      <h2>{type}</h2>
      <p>{plan.text}</p>
      <div className="bill">
        <div className={`price-container ${most ? 'price-container-most' : ''}`}><h1>${price.toFixed(2)}</h1><p>/{monthly}</p></div>
        <p>billed {monthly}</p>
      </div>
      <div className="advantages">
        <ul>
        {plan.advantages.map((el, index) =>
            <li 
                key={index} 
            >
                {el}        
            </li>
        )}
        </ul>
      </div>
      <button type="button" className={`${most ? 'button-most' :''}`}>
        Buy now
      </button>
    </div>
  );
}
const PLANS = {
  Basic: {
    text: "Access to a curated selection of abstract images",
    advantages: [
      "Standard quality images",
      "Limited to personal use",
      "Email support",
    ],
  },

  Standard: {
    text: "Unlock access to a wider library of high-quality abstract images",
    advantages: [
      "High quality images",
      "Personal and small business use",
      "Priority email support",
      "Monthly new image updates",
    ],
  },

  Premium: {
    text: "Full access to the complete collection of exclusive abstract visuals",
    advantages: [
      "Ultra high-resolution images",
      "Licensed for commercial and client use",
      "Dedicated account manager",
      "Priority support via chat & email",
      "Early access to new releases",
    ],
  },
};