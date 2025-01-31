import React, { useState, useCallback, useMemo } from 'react';
import '../styles/RacionalTable.css';
import { racionalTableCols } from '../services/Labels';

const initialRows = [
  { id: 1, descricao: '', valorTotalAcumulado: '', valorAditado: '', novoValorTotalAcumulado: '', varValor: '', dataInicioVigencia: '', dataFimVigencia: '', prazoTotalAcumulado: '', varPrazo: ''}
];

const RacionalTable = () => {
  const [rows, setRows] = useState(initialRows);
  const [showAddButton, setShowAddButton] = useState(false);

  const handleAddRow = useCallback(() => {
    const newRow = { id: rows.length + 1, descricao: '', valorTotalAcumulado: '', valorAditado: '', novoValorTotalAcumulado: '', varValor: '', dataInicioVigencia: '', dataFimVigencia: '', prazoTotalAcumulado: '', varPrazo: '' };
    setRows((prevRows) => [...prevRows, newRow]);
  }, [rows]);

  const handleInputChange = useCallback((index, event) => {
    const updatedRows = [...rows];
    updatedRows[index][event.target.name] = event.target.value;
    setRows(updatedRows);
  }, [rows]);

  const buttonStyle = useMemo(() => ({
    position: 'absolute',
    bottom: '5px',
    left: '5px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#f2f2f2',
    color: 'black',
    border: 'none',
    fontSize: '12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }), []);

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setShowAddButton(true)}
      onMouseLeave={() => setShowAddButton(false)}
    >
      <form className="form-block">
        <table className="racional-table">
          <thead>
            <tr>
              {racionalTableCols.map((column) => (
                <th key={column.field}>{column.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id}>
                {racionalTableCols.map((column) => (
                  <td key={column.field}>
                    {column.field === 'id' ? (
                      row.id
                    ) : (
                      <input
                        type="text"
                        name={column.field}
                        value={row[column.field]}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </form>
      {showAddButton && (
        <button onClick={handleAddRow} style={buttonStyle}>+</button>
      )}
    </div>
  );
};

export default RacionalTable;
