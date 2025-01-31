import '../styles/CommercialTable.css';
import React, { useState, useCallback } from 'react';
import {CommercialTableRows, CommercialTableCols} from '../services/Labels';
import { 
  setPropFinalAndVariation,
  setBaseDifal,
  setCustoTotal,
  setVarOrcado
} from './CommercialTableFormulas'; 

/* Função para criar a matriz do mapa comercial */
const CommercialTable = ({formData}) => {
  const [columns, setColumns] = useState(CommercialTableCols);

  const handleInputChange = useCallback((colIndex, field, event) => {
    const updatedColumns = [...columns];
    const value = event.target.value;
    updatedColumns[colIndex][field] = value;

    // Chamada das funções encapsuladas
    setPropFinalAndVariation(updatedColumns, colIndex, field, value);
    setBaseDifal(updatedColumns, colIndex, field);
    setCustoTotal(updatedColumns, colIndex, field);
    setVarOrcado(updatedColumns, colIndex, field, formData)
    setColumns(updatedColumns);
  }, [columns, formData]);

  return (
    <div style={{ position: 'relative' }}>
      <form className="form-block">
        <table className="contract-commercial-table">
          <tbody>
            {CommercialTableRows.map((row) => (
              <tr key={row.field}>
                <th>{row.header}</th>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>
                    {row.field === 'frete' ? (
                      <select
                        name={`frete-${colIndex}`}
                        value={col['frete']}
                        onChange={(e) => handleInputChange(colIndex, 'frete', e)}
                      >
                        <option value="vazio"> </option>
                        <option value="FOB">FOB</option>
                        <option value="CIF">CIF</option>
                      </select>
                    ) : row.field === 'moeda' ? (
                      <select
                        name={`moeda-${colIndex}`}
                        value={col['moeda']}
                        onChange={(e) => handleInputChange(colIndex, 'moeda', e)}
                      >
                        <option value="vazio"> </option>
                        <option value="BRL">BRL</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                      </select>
                    ) : row.field === 'difalAplicavel' ? (
                      <select
                        name={`difalAplicavel-${colIndex}`}
                        value={col['difalAplicavel']}
                        onChange={(e) => handleInputChange(colIndex, 'difalAplicavel', e)}
                      >
                        <option value="vazio"> </option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                      </select>
                    ) : (
                      <input
                        type="text"
                        name={`${row.field}-${colIndex}`}
                        value={col[row.field]}
                        onChange={(e) => handleInputChange(colIndex, row.field, e)}
                      />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default CommercialTable;
