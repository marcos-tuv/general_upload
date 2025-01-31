import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

/**
 * Represents a ReportCollector object that fetches report data.
 * @class
 */
class ReportCollector {
  /**
   * Creates a new ReportCollector instance.
   * @constructor
   * @param {function} setFormData - A function to update the form data state.
   */
  constructor(setFormData) {
    this.setFormData = setFormData;
  }

  /**
   * Fetches report data from the server.
   * @async
   * @param {object} formData - The form data to be sent with the request.
   * @returns {boolean} - Returns true if the response is valid, false otherwise.
   */
  async fetchReportData(formData) {
    try {
      const response = await axios.get(`${BASE_URL}/reports/get_report`, {
        params: { purchase_number: formData.pedidoParadigma }
      });

      if (response.data === null) {
        alert('Insira um número de pedido válido');
        return false;
      }

      // Update formData state with all received values
      this.setFormData((prevFormData) => ({
        ...prevFormData,
        ...response.data,
      }));
      return true;
    } catch (error) {
      console.error("Error fetching report data:", error);
      return false;
    }
  }
}

export default ReportCollector;
