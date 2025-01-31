import { useState, useEffect } from 'react';
import { fetchMaterialsApi, deleteMaterialApi, addMaterialApi } from './services/MaterialApiService';

function useMaterialManagement() {
  const [materials, setMaterials] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [codItem, setCodItem] = useState('');
  const [narrativa, setNarrativa] = useState('');
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = async () => {
    try {
      const materialsData = await fetchMaterialsApi();
      setMaterials(materialsData);
    } catch (error) {
      console.error('Erro ao buscar materiais:', error);
    }
  };

  const handleCheckboxChange = (materialId) => {
    setSelectedMaterials((prevSelected) =>
      prevSelected.includes(materialId)
        ? prevSelected.filter((id) => id !== materialId)
        : [...prevSelected, materialId]
    );
  };

  const handleDeleteMaterials = async () => {
    try {
      await deleteMaterialApi(selectedMaterials);
      fetchMaterials();
      alert('Material(is) deletado(s) com sucesso');
    } catch (error) {
      console.error('Erro ao deletar materiais:', error);
    }
  };

  const handleAddMaterial = async () => {
    try {
      await addMaterialApi({ codItem, narrativa, categoria });
      setCodItem('');
      setNarrativa('');
      setCategoria('');
      fetchMaterials();
      alert('Material adicionado com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar material:', error);
    }
  };

  return {
    materials, selectedMaterials, codItem, narrativa, categoria,
    setCodItem, setNarrativa, setCategoria, handleCheckboxChange,
    handleDeleteMaterials, handleAddMaterial
  };
}

export default useMaterialManagement;
