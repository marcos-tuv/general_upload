import React from 'react';
import '../styles/PurchaseLine.css'

const purchaseLineLabels = [
  { label: "Pedido Paradigma", name: "pedidoParadigma", readOnly: false },
  { label: "Pedido TOTVS", name: "pedidoTOTVS", readOnly: false },
  { label: "Número Cotação", name: "numeroCotacao", readOnly: false },
  { label: "Data de Emissão RH", name: "dataGeracaoRH", readOnly: false },
  { label: "RH ID", name: "numeroRh", readOnly: true }
];

function PurchaseLine({ onChange, formData, onFetchData }) {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.name === 'pedidoParadigma') {
      e.preventDefault();
      onFetchData();
    }
  };

  return (
    <div className="w-layout-blockcontainer w-container">
      <div className="QuickStack">
        {purchaseLineLabels.map((field, index) => (
          <div key={index} className="w-layout-cell">
            <form className="purchaseline-block">
              <label>{field.label}: </label>
              <input
                name={field.name}
                value={
                  field.name === "numeroCotacao"
                    ? formData.cotacao || ''
                    : field.name === "dataGeracaoRH"
                    ? formData.data_geracao_rh || ''
                    : formData[field.name] || ''
                }
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
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

export default PurchaseLine;
