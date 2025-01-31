import { formatCurrency } from "../services/Constants";

const calculateVariation = (propFinal, propInicial) => {
  const finalValue = parseFloat(propFinal.replace(/[^\d.-]/g, '')) || 0;
  const inicialValue = parseFloat(propInicial.replace(/[^\d.-]/g, '')) || 0;
  if (inicialValue === 0) return '';
  const variation = ((finalValue / inicialValue) - 1) * 100;
  
  return variation.toFixed(1);
};

// Calcula variação da proposta e Diferença Sobre a Melhor Proposta Equalizada
const setPropFinalAndVariation = (columns, colIndex, field, value) => {
if (field === 'propFinal') {
    const propInicialValue = columns[colIndex]['propInicial'];
    columns[colIndex]['varProposta'] = calculateVariation(value, propInicialValue).replace('.', ',') + ' %';
    columns[colIndex]['valorTotalSemDifal'] = columns[colIndex]['propFinal'];

    const melhorPropEqualizada = parseFloat((columns[0]['propEqualizada'] || '').replace(/[R$\s.]/g, '').replace(',', '.'));
    const propFinalValue = parseFloat((columns[colIndex]['propFinal'] || '').replace(/[R$\s.]/g, '').replace(',', '.'));
    const difMelhorPropEqualizada = (((propFinalValue/melhorPropEqualizada) - 1) * 100).toFixed(1).replace('.', ',') + ' %';
    columns[colIndex]['difMelhorPropEqualizada'] = difMelhorPropEqualizada;
}
};
  
// Calcula baseDifal e valorFinalComDifal
const setBaseDifal = (columns, colIndex, field) => {
if (field === 'propFinal' || field === 'icms') {
    const propFinalValue = parseFloat(columns[colIndex]['propFinal'].replace(/[R$\s.]/g, '').replace(',', '.')) || 0;
    const icmsValue = parseFloat(columns[colIndex]['icms'].replace(/[^\d.-]/g, '')) || 0;
    const baseDifal = propFinalValue - (propFinalValue * (icmsValue / 100));
    const valorFinalComDifal = icmsValue !==0 ? baseDifal / 0.81 : propFinalValue;
    columns[colIndex]['baseDifal'] = formatCurrency(baseDifal.toFixed(1));
    columns[colIndex]['valorFinalComDifal'] = formatCurrency(valorFinalComDifal.toFixed(1));
}
};
  
// Calcula custoTotal
const setCustoTotal = (columns, colIndex, field) => {
if (field === 'propFinal' || field === 'valorFinalComDifal' || field === 'custoEstimadoFrete') {
    const valorFinalComDifalValue = parseFloat(columns[colIndex]['valorFinalComDifal'].replace(/[^\d,-]/g, '').replace('.', '').replace(',', '.')) || 0;
    const propFinalValue = parseFloat(columns[colIndex]['propFinal'].replace(/[R$\s.]/g, '').replace(',', '.')) || 0;
    const custoEstimadoFreteValue = parseFloat(columns[colIndex]['custoEstimadoFrete']) / 100 || 0;
    const custoTotal = valorFinalComDifalValue + (propFinalValue * custoEstimadoFreteValue);
    columns[colIndex]['custoTotal'] = formatCurrency(custoTotal.toFixed(1));
}
};

// Calcula Variação Sobre Orçado
const setVarOrcado = (updatedColumns, colIndex, field, formData) => {
  if (field === 'propFinal') {
    const orcamento = parseFloat((formData['orcamentos'] || '').replace(/[R$\s.]/g, '').replace(',', '.')) || 0;
    const propFinal = parseFloat((updatedColumns[colIndex]['propFinal'] || '').replace(/[R$\s.]/g, '').replace(',', '.')) || 0;
    updatedColumns[colIndex]['varSobreOrcado'] = (((propFinal / orcamento ) - 1) * 100).toFixed(1).replace('.', ',') + ' %';
    }
};
  
export {setPropFinalAndVariation, setBaseDifal, setCustoTotal, setVarOrcado};
  