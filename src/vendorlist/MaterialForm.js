import React from 'react';

const MaterialForm = ({ codItem, setCodItem, narrativa, setNarrativa, categoria, setCategoria, onAddMaterial }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Adicionar Material</h4>
      <input 
        type="text" 
        placeholder="Código do Item" 
        value={codItem} 
        onChange={(e) => setCodItem(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Narrativa" 
        value={narrativa} 
        onChange={(e) => setNarrativa(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Categoria" 
        value={categoria} 
        onChange={(e) => setCategoria(e.target.value)} 
      />
      <button onClick={onAddMaterial}>Adicionar</button>
    </div>
  );
};

export default MaterialForm;
