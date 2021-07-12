import React from "react";
import "./Contact.css";

const Contact = () => (
  <div className="Contact" data-testid="Contact">
    <fieldset>
      Name & Email:
      <br></br>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      {/* replace with CSS styling */}
      <br></br>
      <br></br>
      <label for="message">Your Message: </label>
      <br></br>
      <textarea id="message" rows="4" cols="50"></textarea>
      {/* replace with CSS styling */}
      <br></br>
      <br></br>
      <input type="submit" />
    </fieldset>
  </div>
);

export default Contact;
