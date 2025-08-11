import React from "react";
type props = {
  most?: boolean;
  price: number;
  monthly: 'monthly' | 'yearly';
  type: 'Basic' | 'Premium';
};
export function PricingSection({ price, monthly, type, most }: props) {
  const plan = PLANS[type];
  return (
    <div className="price-card">
      <h2>{type}</h2>
      <p>{plan.text}</p>
      <div className="bill">
        <div className="price-container"><h1>${price.toFixed(2)}</h1><p>/{monthly}</p></div>
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
      <button>
        Buy now
      </button>
    </div>
  );
}
const PLANS = {
  Basic: {
    text: "Access to a curated selection of abstract images",
    advantages: [
      "standard quality images",
      "Limited to personal use",
      "email support",
    ],
  },
  
  Premium: {
    text: "Access to a all selection of abstract images",
    advantages: [
      "high quality images",
      "free to personal use",
      "email support",
    ],
  },
};
