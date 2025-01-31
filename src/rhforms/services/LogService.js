import axios from 'axios';

/**
 * Service class for logging data to the server.
 */
class LogService {
  /**
   * Creates an instance of LogService.
   * @param {string} apiUrl - The API URL for saving logs.
   */
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  /**
   * Saves log data to the server.
   * @param {string} token - The authorization token.
   * @param {object} logData - The log data to be saved.
   * @throws {Error} If there is an error saving the log.
   */
  async saveLog(token, logData) {
    try {
      await axios.post(`${this.apiUrl}/save_log`, logData, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
    } catch (error) {
      console.error("Error saving log:", error);
      throw error;
    }
  }
}

export default LogService;
