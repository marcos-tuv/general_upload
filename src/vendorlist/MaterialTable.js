import React from 'react';

const MaterialTable = ({ materials, selectedMaterials, onCheckboxChange }) => {
  return (
    <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ddd', borderRadius: '5px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead style={{ position: 'sticky', top: '0', backgroundColor: '#006129', color: 'white', zIndex: '1000' }}>
          <tr>
            <th style={{ padding: '10px' }}></th>
            <th style={{ padding: '10px' }}>Código do Item</th>
            <th style={{ padding: '10px' }}>Narrativa</th>
            <th style={{ padding: '10px' }}>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material) => (
            <tr key={material.codItem} style={{ borderBottom: '1px solid #ddd' }}>
              <td>
                <input 
                  type="checkbox" 
                  checked={selectedMaterials.includes(material.codItem)} 
                  onChange={() => onCheckboxChange(material.codItem)} 
                />
              </td>
              <td>{material.codItem}</td>
              <td>{material.narrativa}</td>
              <td>{material.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaterialTable;
