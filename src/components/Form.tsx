import React from "react";

export function Form() {
  const year = new Date().getFullYear();

  return (
    <div className="form-container">
      <form>
       <div className="form-row">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Message:</label>
          <textarea name="message"></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
