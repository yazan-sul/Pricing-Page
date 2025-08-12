import React from "react";
type props = {
  imgSrc: string;
  name: string;
  email: string;
  text: string;
};
export function TestimonialsCard({ imgSrc, name, email, text }: props) {
  return (
    <article className="profile-card">
      <div className="profile-head">
        <img
          className="profile-img"
          src={imgSrc}
          alt={`Profile picture of ${name}`}
        />
        <div className="name-email">
          <h3 className="testimonial-name"> {name}</h3>
          <h5 className="testimonial-email">{email}</h5>
        </div>
      </div>
      <p className="testimonial-text">{text}</p>
    </article>
  );
}
