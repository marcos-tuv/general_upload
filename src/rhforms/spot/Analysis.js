import React from 'react';
import '../styles/Analysis.css';

const formFields = [
  { label: "Análise Técnica:", type: "textarea", name: "analiseTecnica", className: "analysis-label" },
  { label: "Houve Desclassificação", type: "select", name: "houveDesclassificacao", className: "desclassificao-label", options: ["Não", "Sim"] },
  { label: "Desclassificados:", type: "textarea", name:"desclassificados" ,className: "desclassificacao-label" },
  { label: "Aprovador Desqual.:", type: "textarea", name: "aprovador-desqual", className: "aprovador-desqual-label"}
];

function Analysis() {
  return (
    <div className="w-layout-blockcontainer w-container">
      <div className="QuickStack">
        {formFields.map((field, index) => (
          <div key={index} className="w-layout-cell">
            <form>
              <label name={field.name} className={field.className}>
                {field.label}
                {field.type === "textarea" && (
                  <textarea className="textarea" rows="4"></textarea>
                )}
                {field.type === "select" && (
                  <select name={field.name} className="select-label">
                    {field.options.map((option, idx) => (
                      <option key={idx} value={option}>{option}</option>
                    ))}
                  </select>
                )}
              </label>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analysis;
