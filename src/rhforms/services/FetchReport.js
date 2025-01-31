const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchReportById = async (rhType, id, setFormData) => {
  try {
    const response = await fetch(`${BASE_URL}/report_by_id/?rh_type=${rhType}&id=${id}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar o relatório.');
    }
    const data = await response.json();
    setFormData(data); 
    console.log(data);
  } catch (error) {
    alert(`Erro: ${error.message}`);
  }
};
