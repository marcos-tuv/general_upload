export const calculateDeltaValues = (formData, tableData) => {
    const precoHistorico = parseFloat((formData.preco_historico || '').replace(/[R$\s.]/g, '').replace(',', '.')) || 0;
    const baseline = parseFloat((formData.baseline || '').replace(/[R$\s.]/g, '').replace(',', '.'))  || 0;
    const orcamento = parseFloat((formData.orcamentos || '').replace(/[R$\s.]/g, '').replace(',', '.')) || 0;
    const melhorPropEqual = parseFloat((formData.melhorPropEqual || '').replace(/[R$\s.]/g, '').replace(',', '.')) || 0;
    const valorCompra = parseFloat((formData.valorCompra || '').replace(/[R$\s.]/g, '').replace(',', '.')) || 1;
  
    const varHistCompra = valorCompra ? ((valorCompra / precoHistorico) - 1) * 100 : 0;
    const difHistCompra = valorCompra - precoHistorico;
    const varBaselineCompra = valorCompra ? ((valorCompra / baseline) - 1) * 100 : 0;
    const difBaseCompra = valorCompra - baseline;
    const varOrcamentoCompra = valorCompra ? ((valorCompra / orcamento) - 1) * 100 : 0;
    const difOrcamentoCompra = valorCompra - orcamento;
    const varMelhorPropEqualCompra = valorCompra ? ((valorCompra / melhorPropEqual) - 1) * 100 : 0;
    const difMelhrPropEqualCompra = valorCompra - melhorPropEqual;
  
    const updatedData = [...tableData];
    updatedData[0][1].value = varHistCompra.toFixed(1);
    updatedData[1][1].value = difHistCompra.toFixed(1);
    updatedData[0][2].value = varBaselineCompra.toFixed(1);
    updatedData[1][2].value = difBaseCompra.toFixed(1);
    updatedData[0][3].value = varOrcamentoCompra.toFixed(1);
    updatedData[1][3].value = difOrcamentoCompra.toFixed(1);
    updatedData[0][4].value = varMelhorPropEqualCompra.toFixed(1);
    updatedData[1][4].value = difMelhrPropEqualCompra.toFixed(1);
  
    return updatedData;
  };
  