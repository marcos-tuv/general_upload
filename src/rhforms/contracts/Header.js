import React from 'react';
import '../styles/PurchaseLine.css'

const formFields = [
  { label: "Negociação (Nº Cotação)", name: "numNegociacao", readOnly: false },
  { label: "Data Emissão - RH", name: "dataEmissaoRh", readOnly: false },
  { label: "RH ID: ", name: "numeroRh", readOnly: true },
];

function Header({onChange, formData}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  
  return (
    <div className="w-layout-blockcontainer w-container">
      <div className="QuickStack" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {formFields.map((field, index) => (
          <div key={index} className="w-layout-cell" style={{ flex: '1 1 10%' }}>
            <form className="purchaseline-block">
              <label>{field.label}</label>
              <input
                className="w-input"
                name={field.name}
                value={formData[field.name] || ''}
                style={{ height: '25px', width: '100%' }}
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