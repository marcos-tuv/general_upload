import { useState, useEffect } from 'react';
import { fetchSuppliersApi, deleteSupplierApi, addSupplierApi } from './services/SupplierApiService';

function useSupplierManagement() {
  const [suppliers, setSuppliers] = useState([]);
  const [selectedSuppliers, setSelectedSuppliers] = useState([]);
  const [categoria, setCategoria] = useState('');
  const [codEmitente, setCodEmitente] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [fornecedor, setFornecedor] = useState('');

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const suppliersData = await fetchSuppliersApi();
      setSuppliers(suppliersData);
    } catch (error) {
      console.error('Erro ao buscar fornecedores:', error);
    }
  };

  const handleCheckboxChange = (supplierId) => {
    setSelectedSuppliers((prevSelected) =>
      prevSelected.includes(supplierId)
        ? prevSelected.filter((id) => id !== supplierId)
        : [...prevSelected, supplierId]
    );
  };

  const handleDeleteSuppliers = async () => {
    try {
      await deleteSupplierApi(selectedSuppliers);
      fetchSuppliers();
      alert('Fornecedor(es) deletado(s) com sucesso');
    } catch (error) {
      console.error('Erro ao deletar fornecedores:', error);
    }
  };

  const handleAddSupplier = async () => {
    try {
      await addSupplierApi({ categoria, codEmitente, cnpj, fornecedor });
      setCategoria('');
      setCodEmitente('');
      setCnpj('');
      setFornecedor('');
      fetchSuppliers();
      alert('Fornecedor adicionado com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar fornecedor:', error);
    }
  };

  return {
    suppliers, selectedSuppliers, categoria, codEmitente, cnpj, fornecedor,
    setCategoria, setCodEmitente, setCnpj, setFornecedor, handleCheckboxChange,
    handleDeleteSuppliers, handleAddSupplier
  };
}

export default useSupplierManagement;
