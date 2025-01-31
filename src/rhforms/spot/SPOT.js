import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import { handleInputChange } from '../services/Constants';
import PurchaseLine from './PurchaseLine';
import RequestLine from './RequestLine';
// import Emergency from './Emergency';
// import DeltaTable from './DeltaTable';
import ItemsAcquired from './Items';
import CommercialTable from './CommercialTable';
import Quantities from './Quantities';
import Vendorlist from './Vendorlist';
import VendorlistSelect from './VendorlistSelect';
import Analysis from './Analysis';
import Equalization from './Equalization';
import Anexos from './Anexos';
import Winner from './Winner';
import PrintButton from './PrintButton';
import Footer from './Footer';
import ReportCollector from '../services/ReportCollector';
import LogManager from '../services/LogManager';
import LoadingOverlay from '../services/LoadingOverlay';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Spot() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
      setUser({ token, username });
    }

    // Chamada para preencher o número RH ao carregar o componente
    const logManagerInstance = new LogManager(BASE_URL);
    logManagerInstance.fetchLastLogId(setFormData, 'FIND_LAST_SPOT');

  }, []);

  const reportDataService = new ReportCollector(setFormData);

  const handleFetchData = async () => {
    setLoading(true);
    await reportDataService.fetchReportData(formData);
    setLoading(false);
  };

  return (
    <div className="body">
      {loading && <LoadingOverlay />}
      <div className="w-layout-blockcontainer w-container" id="report-content">
        {/* Seção da Página 1 */}
        <div id="page-1">
          <section>
            <h2 className="heading-2">Pré RH - SPOT</h2>
          </section>
          <PurchaseLine
            onChange={(name, value) => handleInputChange(formData, setFormData, name, value)}
            formData={formData}
            onFetchData={handleFetchData}
          />
          <RequestLine
            onChange={(name, value) => handleInputChange(formData, setFormData, name, value)}
            formData={formData}
          />
          {/* <div className="QuickStack-additive">
            <Emergency />
            <DeltaTable formData={formData} />
          </div> */}
          <ItemsAcquired
            onChange={(name, value) => handleInputChange(formData, setFormData, name, value)}
            formData={formData}
          />
        </div>

        {/* Seção da Página 2 */}
        <div id="page-2">
          {/* <h2 style={{ textAlign: 'center' }}>Mapa Comercial</h2> */}
          {/* <CommercialTable formData={formData} /> */}
          <Quantities
            formData={formData}
            onChange={(name, value) => handleInputChange(formData, setFormData, name, value)}
          />
          {/* <Vendorlist /> */}
        </div>
        {/* Seção da Página 3 */}
        <div id="page-3">
          {/* <VendorlistSelect/> */}
          {/* <Analysis />
          <Equalization />
          <Anexos
            onChange={(name, value) => handleInputChange(formData, setFormData, name, value)}
            formData={formData}
          /> */}
          <Winner
            onChange={(name, value) => handleInputChange(formData, setFormData, name, value)}
            formData={formData}
          />
          <Footer />
        </div>
      </div>
      <PrintButton formData={formData} reportType="SPOT" />
    </div>
  );
}

export default Spot;
