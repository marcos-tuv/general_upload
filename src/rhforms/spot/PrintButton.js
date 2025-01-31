import React from 'react';
import axios from 'axios';

const PrintButton = ({ formData, reportType }) => {
  const handleGenerateExcel = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/reports/generate_excel/`,
        {
          form_data: formData,
          report_type: reportType,
        },
        { responseType: 'blob' }
      );

      // Criar o download do arquivo Excel
      const blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${reportType.toLowerCase()}_relatorio.xlsx`; // Nome do arquivo
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erro ao gerar Excel:", error);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <button
        onClick={handleGenerateExcel}
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
        Gerar Relatório Excel
      </button>
    </div>
  );
};

export default PrintButton;
