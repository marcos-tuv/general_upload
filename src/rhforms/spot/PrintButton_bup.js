// src/components/PrintButton.js
import React from 'react';
import PDFGenerator from './PDFGenerator';
import SaveFormData from './SaveFormData';

const PrintButton = () => {
  const handleGeneratePDF = async () => {
    const pdfGenerator = new PDFGenerator();
    await pdfGenerator.generatePDF();

    const formDataHandler = new SaveFormData();
    await formDataHandler.captureAndSendFormData();
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <button
        onClick={handleGeneratePDF}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Gerar PDF do Relatório
      </button>
    </div>
  );
};

export default PrintButton;
