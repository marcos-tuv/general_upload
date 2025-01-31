import React from 'react';
import '../styles/RequestLine.css'

const requestLabels = [
  { label: "Requisitante", type: "input", name: "requisitante" },
  { label: "Departamento", type: "input", name: "departamento" },
  { label: "Comprador", name: "comprador" },
  { label: "Tipo de Gasto", type: "select", name: "tipo_contratacao", options: ["Selecione..", "CAPEX", "OPEX"] },
  { label: "Orcamento", type: "input", name: "orcamentos" },
  { label: "Previsto em Orçamento", type: "select", options: ["Selecione..", "Sim", "Não"], name: "previstoOrcamento" },
  { label: "Indicador", type: "input", name: "indicador" },
  // { label: "% Inflação", type: "input", name: "inflacao", placeholder: "(Baseline - Preço Historico)/Baseline", readOnly: true }, 
  { label: "Baseline", type: "input", name: "baseline" },
  { label: "Tipo Baseline", type: "select", name: "tipoBaseline", options: ["Selecione..", "Preço Histórico Corrigido", "Melhor Proposta Equalizada"] },
  { label: "Melhor Proposta Equalizada", type: "input", name: "melhorPropEqual" },
  { label: "Preço Histórico", type: "input", name: "preco_historico" },
  { label: "Data Base Preço Hist.", type: "input", name: "data_preco_historico" },
  // { label: "Valor da Compra", type: "input", name: "valorCompra" },
  // { label: "Emergencial? ", type: "select", name: "emergencial", options: ["Selecione..", "Sim", "Não"]},
  // { label: "Tipo de Compra: ", type: "select", name: "modalidadeCompra", options: ["Selecione..", "SPOT", "Contrato"] },
  // { label: "Contrato Jurídico?: ", type: "select", name: "contratoJuridico", options: ["Selecione..", "Sim", "Não"] },
  // { label: "Nº Contrato: ", type: "input", name: "numContrato" }
];

function RequestLine({ onChange, formData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  

  return (
    <div className="requisitante-block">
      <div className="QuickStack">
        {requestLabels.map((field, index) => (
          <div key={index} className="w-layout-cell">
            <form >
              <label>{field.label}: </label>
              {field.type === 'select' ? (
                <select
                  className="requestLine"
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  style={{ height: '35px' }}
                >
                  {field.options.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  className="requestLine"
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder || ''}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  style={{ height: '35px' }}
                  readOnly={field.readOnly}
                />
              )}
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RequestLine;
