import LogService from './LogService';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

/**
 * Represents a LogManager that handles logging functionality.
 * @class
 */
class LogManager {
  /**
   * Creates an instance of LogManager.
   * @param {string} apiUrl - The API URL for logging service.
   */
  constructor(apiUrl = BASE_URL) {
    this.logService = new LogService(apiUrl);
    this.apiUrl = apiUrl;
  }

  /**
   * Saves a log entry for a user and purchase number.
   * @param {object} user - The user object.
   * @param {string} purchaseNumber - The purchase number.
   * @returns {Promise<void>} A promise that resolves when the log is saved successfully.
   */
  async saveLog(user, purchaseNumber) {
    const token = localStorage.getItem('token');
    const username = user?.username || 'Anonymous';

    const logData = {
      username: username,
      purchase_number: purchaseNumber,
      date_time: new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    try {
      await this.logService.saveLog(token, logData);
    } catch (error) {
      console.error("Error saving log:", error);
    }
  }

  /**
   * Fetches the last log ID from the server and updates the formData state.
   * @param {function} setFormData - A function to update the form data state.
   * @returns {Promise<void>} A promise that resolves when the last log ID is fetched successfully.
   */
  async fetchLastLogId(setFormData, rhType) {
    try {
      const response = await fetch(`${this.apiUrl}/logs/last_rh_id?rh_type=${rhType}`);
      const data = await response.json();
      if (data.last_log_id) {
        setFormData(prev => ({ ...prev, numeroRh: data.last_log_id + 1 }));
      }
    } catch (error) {
      console.error('Erro ao buscar o último log:', error);
    }
  }
}

export default LogManager;
