import React, { useState, useEffect } from 'react';
import '../styles/DeltaTable.css';
import { calculateDeltaValues } from './DeltaValues';

const deltaLabels = [
  [
    { title: 'RESULTADO (Saving/Penalty):', value: 'Var. (%)', immutable: true },
    { title: 'Δ PREÇO HISTÓRICO VS VLR COMPRA', value: '' },
    { title: 'Δ BASELINE VS VLR COMPRA', value: '' },
    { title: 'Δ ORÇAMENTO VS VLR COMPRA', value: '' },
    { title: 'Δ PERF. DE NEGOCIAÇÃO VS VLR COMPRA', value: '' },
  ],
  [
    { title: 'RESULTADO (Saving/Penalty)', value: 'Dif. (R$)', immutable: true },
    { title: 'Δ PREÇO HISTÓRICO VS VLR COMPRA', value: '' },
    { title: 'Δ BASELINE VS VLR COMPRA', value: '' },
    { title: 'Δ ORÇAMENTO VS VLR COMPRA', value: '' },
    { title: 'Δ PERF. DE NEGOCIAÇÃO VS VLR COMPRA', value: '' },
  ]
];

function DeltaTable({ formData }) {
  const [tableData, setTableData] = useState(deltaLabels);

  useEffect(() => {
    const updatedData = calculateDeltaValues(formData, tableData);
    setTableData(updatedData);
  }, [formData, tableData]);

  const handleInputChange = (rowIndex, colIndex, value) => {
    if (tableData[rowIndex][colIndex].immutable) return; 
    const updatedData = [...tableData];
    updatedData[rowIndex][colIndex].value = value;
    setTableData(updatedData);
  };

  return (
    <table className="tabela-delta">
      <thead>
        <tr>
          {tableData[0].map((item, index) => (
            <th key={index}>{item.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((item, colIndex) => (
              <td key={colIndex}>
                {item.immutable ? (
                  <span className="delta-text">{item.value}</span> 
                ) : (
                  <input
                    name={`table_${rowIndex}_${colIndex}`} 
                    className='delta-input-field'
                    value={item.value}
                    onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                  />
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DeltaTable;
