import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

/**
 * Fetches suppliers from the API.
 * @returns {Promise<Array<Object>>} The array of suppliers objects.
 */
export const fetchSuppliersApi = async () => {
  const response = await axios.get(`${BASE_URL}/suppliers`);
  return response.data.map((supplier) => ({
    id: supplier[0],
    categoria: supplier[1],
    codEmitente: supplier[2], 
    cnpj: supplier[3], 
    fornecedor: supplier[4] 
  }));
};

/**
 * Deletes selected suppliers from the API.
 * @param {Array<Object>} selectedSuppliers - Array of supplier objects to delete.
 */
export const deleteSupplierApi = async (selectedSuppliers) => {
  await axios.delete(`${BASE_URL}/suppliers`, { 
    headers: { 'Content-Type': 'application/json' }, 
    data: selectedSuppliers
  });
};

/**
 * Adds a new supplier to the API.
 * @param {Object} supplier - The supplier object to be added.
 */
export const addSupplierApi = async (supplier) => {
  try {
    await axios.post(`${BASE_URL}/suppliers`, supplier);
  } catch (error) {
    alert('Fornecedor já existente ou erro ao adicionar');
  }
};
