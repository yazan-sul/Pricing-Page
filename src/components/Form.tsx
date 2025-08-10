import React from "react";

export function Form() {
  const year = new Date().getFullYear();

  return (
    <div className="form-container">
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
      </form>
    </div>
  );
}
