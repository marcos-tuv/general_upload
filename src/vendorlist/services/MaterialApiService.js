import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

/**
 * Fetches materials from the API.
 * @returns {Promise<Array<Object>>} The array of material objects.
 */
export const fetchMaterialsApi = async () => {
  const response = await axios.get(`${BASE_URL}/materials`);
  return response.data.map((material) => ({
    codItem: material[0],
    narrativa: material[1],
    categoria: material[2]
  }));
};

/**
 * Deletes selected materials from the API.
 * @param {Array<Object>} selectedMaterials - Array of material objects to delete.
 */
export const deleteMaterialApi = async (selectedMaterials) => {
  await axios.delete(`${BASE_URL}/materials`, { 
    headers: { 'Content-Type': 'application/json' }, 
    data: selectedMaterials
  });
};

/**
 * Adds a new material to the API.
 * @param {Object} material - The material object to be added.
 */
export const addMaterialApi = async (material) => {
  try {
    await axios.post(`${BASE_URL}/materials`, material);
  } catch (error) {
    alert('Material já existente ou erro ao adicionar');
  }
};
