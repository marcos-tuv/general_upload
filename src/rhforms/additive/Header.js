import React from 'react';
import '../styles/PurchaseLine.css'

const formFields = [
  { label: "Número do Contrato", name: "numeroContrato", readOnly: false },
  { label: "Data de Emissão RH", name: "dataEmissaoRh", readOnly: false},
  { label: "RH ID: ", name: "numeroRh", readOnly: true},
];

function Header({onChange, formData}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="w-layout-blockcontainer w-container">
      <div className="QuickStack">
        {formFields.map((field, index) => (
          <div key={index} className="w-layout-cell">
            <form className="purchaseline-block">
              <label>{field.label}: </label>
              <input
                name={field.name}
                value={formData[field.name] || ''}
                style={{ height: '35px'}}
                onChange={handleInputChange}
                readOnly={field.readOnly}
              />
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;