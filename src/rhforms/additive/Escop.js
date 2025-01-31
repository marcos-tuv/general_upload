import React from 'react';
import '../styles/Equalization.css';

const sections = [
  'Escopo',
  'Histórico',
  'Baseline e Orçamento',
  'Negociação',
  'Resultados Obtidos',
  'Anexos'
];

function Escopo() {
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

export default Escopo;