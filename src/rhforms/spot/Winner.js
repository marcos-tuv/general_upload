import React from 'react';

const formFields = [
  { label: "Empresa Recomendada", name: "forn_vencedor" , readOnly: false},
  { label: "Prazo de Entrega (Em Dias)", name: "prazoEntrega" , readOnly: false},
  { label: "Valor da Compra (R$)", name: "valorCompra" , readOnly: false}
];

function Winner({ formData, onChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="w-layout-blockcontainer w-container">
      <div className="QuickStack">
        {formFields.map((field, index) => (
          <div key={index} className="w-layout-cell">
            <form>
              <label>{field.label}</label>
              <input
                className="w-input"
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleInputChange}
                readOnly={field.readOnly}
                style={{ height: '35px' }}
              />
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Winner;
