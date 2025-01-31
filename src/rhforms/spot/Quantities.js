import React from 'react';

const formFields = [
  { label: "Qtd. Itens", name: "quantidade_de_itens", readOnly: false },
  { label: "Qtd. Forn. Convidados", name: "participantes_convidados", readOnly: false },
  { label: "Qtd. Prop. Parciais", name: "participantes_resp_parciais", readOnly: false },
  { label: "Qtd. Prop. Totais", name: "participantes_resp_totais", readOnly: false}
];

const FormField = ({ field, value, onChange }) => {
  return (
    <div className="w-layout-cell">
      <form>
        <label>{field.label}</label>
        <input
          className="quantidades-input"
          name={field.name}
          value={value}
          readOnly={field.readOnly}
          style={{ height: '35px' }}
          onChange={(e) => onChange(field.name, e.target.value)}
        />
      </form>
    </div>
  );
};

const Quantities = ({ formData, onChange }) => {
  return (
    <div className="w-layout-blockcontainer w-container">
      <div className="QuickStack">
        {formFields.map((field, index) => (
          <FormField
            key={index}
            field={field}
            value={formData[field.name] || ''}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Quantities;

