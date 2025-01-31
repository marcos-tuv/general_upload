import React from 'react';
import MaterialTable from './MaterialTable';
import MaterialForm from './MaterialForm';
import useMaterialManagement from './MaterialCustomHook';
// import '../styles/MaterialsManager.css';
import { Button } from 'antd';

function MaterialsManagement() {
  const {
    materials, selectedMaterials, codItem, narrativa, categoria,
    setCodItem, setNarrativa, setCategoria, handleCheckboxChange,
    handleDeleteMaterials, handleAddMaterial
  } = useMaterialManagement();

  return (
    <div className="material-management">
      <h3>Materiais</h3>
      <MaterialTable materials={materials} selectedMaterials={selectedMaterials} onCheckboxChange={handleCheckboxChange} />
      <Button className="delete-button" onClick={handleDeleteMaterials} type="primary" block>Deletar Material(is) Selecionado(s)</Button>
      <MaterialForm 
        codItem={codItem} setCodItem={setCodItem} 
        narrativa={narrativa} setNarrativa={setNarrativa} 
        categoria={categoria} setCategoria={setCategoria} 
        onAddMaterial={handleAddMaterial}
      />
      <Button className="add-button" onClick={handleAddMaterial} type="primary" block>Adicionar Material</Button>
    </div>
  );
}

export default MaterialsManagement;
