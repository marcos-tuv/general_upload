
class SaveFormData {
    constructor() {
      this.formData = {};
    }
  
    captureInputs() {
      const inputs = document.querySelectorAll('input, select, textarea');
      inputs.forEach(input => {
        const name = input.getAttribute('name');
        if (name) {
          this.formData[name] = input.value;
        }
      });
    }
  
    captureTables() {
      const tables = document.querySelectorAll('table');
      tables.forEach((table, index) => {
        const tableData = [];
        const rows = table.querySelectorAll('tbody tr');
        
        rows.forEach(row => {
          const rowData = [];
          const cells = row.querySelectorAll('td');
          cells.forEach(cell => {
            const input = cell.querySelector('input');
            if (input) {
              rowData.push(input.value);
            }
          });
          tableData.push(rowData);
        });
  
        this.formData[`table_${index}`] = tableData;
      });
    }
  
    async sendData() {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/save_form_data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(this.formData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to save form data');
      }
    }
  
    async captureAndSendFormData() {
      this.captureInputs();
      this.captureTables();
      await this.sendData();
    }
  }
  
  export default SaveFormData;
  