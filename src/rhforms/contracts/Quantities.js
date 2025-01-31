import React from 'react';

const formFields = [
  { label: "Qtd. Itens", name: "quantidade_de_itens" },
  { label: "Qtd. Forn. Convidados", name: "participantes_convidados" },
  { label: "Qtd. Prop. Parciais", name: "participantes_resp_parciais" },
  { label: "Qtd. Prop. Totais", name: "participantes_resp_totais" },
  { label: "Volume Anual de OC's", name: "volAnualOcs" }
];

function Quantities() {

  return (
    <div className="w-layout-blockcontainer w-container">
      <div className="QuickStack" style={{ display: 'flex', flexWrap: 'wrap'}}>
        {formFields.map((field, index) => (
          <div key={index} className="w-layout-cell" style={{ flex: '1 1 10%' }}>
            <form>
              <label>{field.label}</label>
              <input
                className="w-input"
                name={field.name}
                style={{ height:'35px', width: '100%' }}
              />
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quantities;
