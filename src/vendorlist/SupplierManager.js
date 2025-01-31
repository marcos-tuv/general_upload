import React from 'react';
import SupplierTable from './SupplierTable';
import SupplierForm from './SupplierForm';
import useSupplierManagement from './SupplierCustomHook';
// import '../styles/SuppliersManager.css';
import { Button } from 'antd';

function SuppliersManagement() {
  const {
    suppliers, selectedSuppliers, categoria, codEmitente, cnpj, fornecedor,
    setCategoria, setCodEmitente, setCnpj, setFornecedor, handleCheckboxChange,
    handleDeleteSuppliers, handleAddSupplier
  } = useSupplierManagement();

  return (
    <div className="supplier-management">
      <h3>Fornecedores</h3>
      <SupplierTable suppliers={suppliers} selectedSuppliers={selectedSuppliers} onCheckboxChange={handleCheckboxChange} />
      <Button className="delete-button" onClick={handleDeleteSuppliers} type="primary" block>Deletar Fornecedor(es) Selecionado(s)</Button>
      <SupplierForm 
        categoria={categoria} setCategoria={setCategoria} 
        codEmitente={codEmitente} setCodEmitente={setCodEmitente} 
        cnpj={cnpj} setCnpj={setCnpj} 
        fornecedor={fornecedor} setFornecedor={setFornecedor} 
        onAddSupplier={handleAddSupplier}
      />
      <Button className="add-button" onClick={handleAddSupplier} type="primary" block>Adicionar Fornecedor</Button>
    </div>
  );
}

export default SuppliersManagement;
