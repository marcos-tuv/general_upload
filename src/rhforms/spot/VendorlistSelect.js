import React from 'react';
import '../styles/Vendorlist.css';

function VendorlistSelect() {
  return (
    <div className="quick-stack">
      <div className="form-container">
        {/* <form className="vendor-block">
          <label className="vendor-label">
            Vendor List:
            <textarea name="vendorlist" className="vendorlist" rows="4"></textarea>
          </label>
        </form> */}

        <form className="vendor-block">
          <label className="vendor-label">
            Importação:
            <select className="vendor-select">
              <option value="">Selecione..</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </label>
          <label className="vendor-label">
            Moeda:
            <select className="vendor-select">
              <option value="">Selecione..</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="brl">BRL</option>
            </select>
          </label>
          <label className="vendor-label">
            Taxa de Câmbio:
            <input type="text" className="vendor-input" />
          </label>
          <label className="vendor-label">
            Data Câmbio:
            <input type="date" className="vendor-input" />
          </label>
        </form>

        <form className="vendor-block">
          <label className="vendor-label">
            Direcionada:
            <select name="direcionada" className="vendor-select">
              <option value="">Selecione..</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </label>
          <label className="vendor-label">
            Exclusiva:
            <select name="exclusiva" className="vendor-select">
              <option value="">Selecione..</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </label>
          <label className="vendor-label">
            Menos que 3 Propostas:
            <select name="menorQueTresPropostas" className="vendor-select">
              <option value="">Selecione..</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </label>
        </form>
        
      </div>
    </div>
  );
}

export default VendorlistSelect;
