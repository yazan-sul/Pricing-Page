import React from "react";
import { FeatureCard } from "./FeatuerCard";

export function Features() {
  return (
    <div>
      <div className="features-parent">
        <p>Premium abstract images</p>
        <h1>Easy access to top quality images</h1>
        <p>In a world where storytelling constantly envolves, we lead with with groundbreaking images Designed for your presantion excellence</p>
      </div>
      <div className="feature-container">
        {features.map((feature, index) => (
          <FeatureCard
            logo={feature.logo}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </div>
  );
}
const features = [
  {
    logo: "♖",
    title: "Flexible Plans",
    text: "Choose a subscription that suits your needs without long-term commitment.",
  },
  {
    logo: "$",
    title: "Affordable Pricing",
    text: "Enjoy premium features at a fraction of the usual cost.",
  },
  {
    logo: "웃",
    title: "User-Friendly",
    text: "Designed with simplicity in mind for a smooth user experience.",
  },
  {
    logo: "❆",
    title: "No Hidden Fees",
    text: "What you see is what you pay — no surprises, ever.",
  },
  {
    logo: "©",
    title: "Trusted & Secure",
    text: "Your data and privacy are protected with industry-grade security.",
  },
  {
    logo: "⇣",
    title: "Offline Access",
    text: "Download content and enjoy it anywhere, even without internet.",
  },
];

//
//
//

//
//
