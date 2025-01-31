import React from 'react';

const SupplierTable = ({ suppliers, selectedSuppliers, onCheckboxChange }) => {
  return (
    <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ddd', borderRadius: '5px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead style={{ position: 'sticky', top: '0', backgroundColor: '#006129', color: 'white', zIndex: '1000' }}>
          <tr>
            <th style={{ padding: '10px' }}></th>
            <th style={{ padding: '10px' }}>Categoria</th>
            <th style={{ padding: '10px' }}>Código Emitente</th>
            <th style={{ padding: '10px' }}>CNPJ</th>
            <th style={{ padding: '10px' }}>Fornecedor</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td>
                <input 
                  type="checkbox" 
                  checked={selectedSuppliers.includes(supplier.id)} 
                  onChange={() => onCheckboxChange(supplier.id)} 
                />
              </td>
              <td>{supplier.categoria}</td>
              <td>{supplier.codEmitente || 'N/A'}</td>
              <td>{supplier.cnpj || 'N/A'}</td>
              <td>{supplier.fornecedor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierTable;
