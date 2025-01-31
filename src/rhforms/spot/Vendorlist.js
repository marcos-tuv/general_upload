import React from 'react';
import '../styles/Equalization.css';

const sections = [
  'Vendor List'
];

function Vendorlist() {
  return (
    <div className="textarea-form">
      <form className="form-block">
        {sections.map((section, index) => (
          <label key={index} className="tf-label">
            {section}
            <textarea name="vendorlist" className="tf-textarea" rows="10"></textarea>
          </label>
        ))}
      </form>
    </div>
  );
}

export default Vendorlist;