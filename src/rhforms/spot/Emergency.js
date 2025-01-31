import React from 'react';
import '../styles/Emergency.css'

const fields = [
  { label: "Emergencial: ", type: "select", name: "emergencial", options: ["Selecione..", "Sim", "Não"]},
  { label: "Tipo de Compra: ", type: "select", name: "modalidadeCompra", options: ["Selecione..", "SPOT", "Contrato"] },
  { label: "Nº Contrato: ", type: "input", name: "numContrato" },
  { label: "Contrato Jurídico?: ", type: "select", name: "contratoJuridico", options: ["Selecione..", "Sim", "Não"] }
];

const Form = () => {
  return (
    <div className="w-layout-blockcontainer w-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {fields.map((field, index) => (
        <div key={index} className="w-layout-cell" style={{ flex: '1 0 50%', padding: '10px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginTop: '5px'}}>{field.label}</label>
          {field.type === 'select' ? (
            <select className="emergency" name={field.name}>
              {field.options.map((option, i) => (
                <option key={i} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input className="emergency" type={field.type} name={field.name} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Form;

