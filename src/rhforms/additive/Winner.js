import React from 'react';

const formFields = [
  { label: "Empresa Recomendada", name: "forn_vencedor" },
  { label: "Valor Total", name: "valorTotal" },
  { label: "Prazo de Vigência (Em Dias)", name: "prazoVigencia" }
];

function Winner() {

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
                style={{ height: '35px'}}
              />
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Winner;