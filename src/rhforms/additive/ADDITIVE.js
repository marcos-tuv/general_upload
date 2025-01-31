import React, {useState, useEffect} from 'react';
import { handleInputChange } from '../services/Constants.js';
import Header from './Header.js';
import RacionalTable from './RacionalTable.js';
import Winner from './Winner.js';
import Object from './Object.js';
import Escop from './Escop.js';
import CaixaCheck from './Checkbox.js';
import DeltaTable from '../spot/DeltaTable.js';
import RequestLine from '../spot/RequestLine.js';
import PrintButton from '../spot/PrintButton.js'
import Footer from '../spot/Footer.js';
import LogManager from '../services/LogManager';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Additive() {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const logManagerInstance = new LogManager(BASE_URL);
    logManagerInstance.fetchLastLogId(setFormData, 'FIND_LAST_ADDITIVE');
  }, []);
  
  return (
    <div className="body">
      <div className="w-layout-blockcontainer w-container" id="report-content">
        {/* Seção da Página 1 */}
        <div id="page-1">
          <section>
            <h2 className="heading-2">Relatório de Homologação - Aditivo</h2>
          </section>
          <Header
            onChange={(name, value) => handleInputChange(formData, setFormData, name, value)}
            formData={formData}
          />

          <RequestLine
            onChange={(name, value) => handleInputChange(formData, setFormData, name, value)}
            formData={formData}
          />
          <div className="QuickStack-additive">
            <CaixaCheck/>
            <DeltaTable formData={formData}/>
          </div>
          <Object/>
        </div>
        {/* Seção da Página 2 */}
          <div id="page-2">
          <h2 style={{ textAlign: 'center' }}>Racional Histórico do Processo</h2>
          <RacionalTable/>
        </div>
        {/* Seção da Página 3 */}
        <div id="page-3">
          <Escop/>
          <Winner/>
        </div>
        <Footer/>
        </div>
        <PrintButton formData={formData} reportType="ADDITIVE" />
    </div>
  );
}

export default Additive;
