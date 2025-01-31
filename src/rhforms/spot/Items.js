import '../styles/Items.css';
import React from 'react';

const itemFields = [
  { label: "Objetos", type: "textarea", name: "objetos", rows: 10, readOnly: false },
  { label: "Aplicação", type: "textarea", name: "itensAplicacao", rows: 10, readOnly: false }
];

function ItemsAcquired({ onChange, formData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="w-layout-blockcontainer w-container">
      <div className="QuickStackItems">
        {itemFields.map((field, index) => (
          <div key={index} className="w-layout-cell">
            <form>
              <label>{field.label}: </label>
              <textarea
                className="itemsInput"
                name={field.name}
                rows={field.rows}
                value={formData[field.name] || ''}
                onChange={handleInputChange}
                readOnly={field.readOnly}
              ></textarea>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemsAcquired;
