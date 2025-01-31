import React from 'react';
import '../styles/Equalization.css';

const sections = [
  'Equalização',
  'Negociação',
  'Orçamento (Orçado x Contrato)',
  'Conclusão'
];

function Equalization() {
  return (
    <div className="textarea-form">
      <form className="form-block">
        {sections.map((section, index) => (
          <label key={index} className="tf-label">
            {section}
            <textarea className="tf-textarea" name={section} rows="10"></textarea>
          </label>
        ))}
      </form>
    </div>
  );
}

export default Equalization;
