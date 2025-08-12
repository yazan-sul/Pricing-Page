import React from "react";
type props = {
  logo: string;
  title: string;
  text: string;
};
export function FeatureCard({ logo, title, text }: props) {
  return (
    <div className="feature-card">
      <div className="feature-logo">{logo}</div>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  );
}
