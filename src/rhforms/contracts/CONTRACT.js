import '../styles/App.css';
import React, { useState, useEffect } from 'react';
import { handleInputChange } from '../services/Constants.js';
// import { fetchReportById} from '../services/FetchReport.js';
import Header from './Header.js';
import Quantities from './Quantities.js';
import ItemsAcquired from '../spot/Items.js';
import RequestLine from '../spot/RequestLine.js';
// import Emergency from '../spot/Emergency.js';
// import DeltaTable from '../spot/DeltaTable.js';
import ContractCommercialTable from '../spot/CommercialTable.js'
import VendorlistSelect from '../spot/VendorlistSelect.js';
import VendorlistTextArea from '../spot/Vendorlist.js';
import Analysis from '../spot/Analysis.js';
import Equalization from '../spot/Equalization.js';
import Winner from '../spot/Winner.js';
import PrintButton from '../spot/PrintButton.js'
import Footer from '../spot/Footer.js';
import LogManager from '../services/LogManager';
// import SearchButton from '../services/SearchButton';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Contract() {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Chamada para preencher o número RH ao carregar o componente
    const logManagerInstance = new LogManager(BASE_URL);
    logManagerInstance.fetchLastLogId(setFormData, 'FIND_LAST_CONTRACT');
  }, []);

  return (
    <div className="body">
      <div className="w-layout-blockcontainer w-container" id="report-content">
        {/* Botão de Pesquisa */}
        {/* <SearchButton onSearch={(id) => fetchReportById('CONTRACT', id, setFormData)} /> */}
        
        {/* Seção da Página 1 */}
        <div id="page-1">
          <section>
            <h2 className="heading-2">Relatório de Homologação - Contrato</h2>
          </section>
          <Header 
            onChange={(name, value) => handleInputChange(formData, setFormData, name, value)} 
            formData={formData}
          />
            
          <RequestLine
            onChange={(name, value) => handleInputChange(formData, setFormData, name, value)}
            formData={formData}
          />
          {/* <div className="QuickStack-additive">
            <Emergency/>
            <DeltaTable formData={formData}/>
          </div> */}
          <ItemsAcquired
            onChange={(name, value) => handleInputChange(formData, setFormData, name, value)}
            formData={formData}
          />
        </div>
        {/* Seção da Página 2 */}
        <div id="page-2">
          <h2 style={{textAlign: 'center'}}>Mapa Comercial</h2>
          <ContractCommercialTable/>
        </div>
        {/* Seção da Página 3 */}
        <div id="page-3">
          <Quantities/>
          <VendorlistTextArea/>
          <VendorlistSelect/>
          <Analysis />
          <Equalization />
          <Winner
            onChange={(name, value) => handleInputChange(formData, setFormData, name, value)}
            formData={formData}
          />
        </div>
        <Footer />
      </div>
      <PrintButton formData={formData} reportType="CONTRACT" />
    </div>
  );
}

export default Contract;