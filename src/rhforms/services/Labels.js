const CommercialTableRows = [
    { header: 'Fornecedor:', field: 'fornecedor' },
    { header: 'Proposta Inicial (com impostos):', field: 'propInicial' },
    { header: 'Proposta Equalizada (com impostos):', field: 'propEqualizada' },
    { header: 'Proposta Final (com impostos):', field: 'propFinal' },
    { header: 'ICMS (%):', field: 'icms' },
    // { header: 'Valor Total Sem Difal:', field: 'valorTotalSemDifal' },
    { header: 'Difal é Aplicável:', field: 'difalAplicavel' },
    // { header: 'Base Difal:', field: 'baseDifal' },
    // { header: 'Valor Final com Difal:', field: 'valorFinalComDifal' },
    // { header: 'Variação da Proposta (%):', field: 'varProposta' },
    // { header: 'Variação Sobre o Orçado (%):', field: 'varSobreOrcado' },
    // { header: 'Dif. Melhor Proposta Equalizada (%):', field: 'difMelhorPropEqualizada' },
    { header: 'Frete (%):', field: 'frete' },
    { header: 'Custo Estimado de Frete (%):', field: 'custoEstimadoFrete' },
    // { header: 'Custo Total (R$):', field: 'custoTotal' },
    { header: 'Prazo de Entrega:', field: 'prazoEntrega' },
    { header: 'Condição de Pagamento:', field: 'condicaoPagamento' },
    // { header: 'Moeda:', field: 'moeda' },
  ];

const CommercialTableCols = [
    { id: 1, fornecedor: 'Insira o Valor', propInicial: 'Insira o Valor', propEqualizada: 'Insira o Valor', propFinal: 'Insira o Valor', icms: 'Insira o Valor', valorTotalSemDifal: '', 
      difalAplicavel: '', varProposta: '', varSobreOrcado: '', difMelhorPropEqualizada: '', frete: ' ',
      custoEstimadoFrete: 'Insira o Valor', custoTotal: '', prazoEntrega: 'Insira o Valor', condicaoPagamento: 'Insira o Valor', moeda: ' ' },
    { id: 2, propInicial: '', propEqualizada: '', propFinal: '', icms: '', valorTotalSemDifal: '', 
      difalAplicavel: '', varProposta: '', varSobreOrcado: '', difMelhorPropEqualizada: '', frete: ' ',
      custoEstimadoFrete: '', custoTotal: '', prazoEntrega: '', condicaoPagamento: '', moeda: ' ' },
    { id: 3, propInicial: '', propEqualizada: '', propFinal: '', icms: '', valorTotalSemDifal: '', 
      difalAplicavel: '', varProposta: '', varSobreOrcado: '', difMelhorPropEqualizada: '', frete: ' ',
      custoEstimadoFrete: '', custoTotal: '', prazoEntrega: '', condicaoPagamento: '', moeda: ' ' },
    { id: 4, propInicial: '', propEqualizada: '', propFinal: '', icms: '', valorTotalSemDifal: '', 
      difalAplicavel: '', varProposta: '', varSobreOrcado: '', difMelhorPropEqualizada: '', frete: ' ',
      custoEstimadoFrete: '', custoTotal: '', prazoEntrega: '', condicaoPagamento: '', moeda: ' ' },
    { id: 5, propInicial: '', propEqualizada: '', propFinal: '', icms: '', valorTotalSemDifal: '', 
      difalAplicavel: '', varProposta: '', varSobreOrcado: '', difMelhorPropEqualizada: '', frete: ' ',
      custoEstimadoFrete: '', custoTotal: '', prazoEntrega: '', condicaoPagamento: '', moeda: ' ' }
  ];

const racionalTableCols = [
    { header: 'ID', field: 'id' },
    { header: 'Descrição', field: 'descricao' },
    { header: 'Valor Total Acumulado (R$)', field: 'valorTotalAcumulado' },
    { header: 'Valor Aditado (R$)', field: 'valorAditado' },
    { header: 'Novo Valor Total Acumulado (R$)', field: 'novoValorTotalAcumulado' },
    { header: 'Var. Valor (%)', field: 'varValor' },
    { header: 'Data de Início de Vigência', field: 'dataInicioVigencia' },
    { header: 'Data de Término da Vigência', field: 'dataFimVigencia' },
    { header: 'Prazo Total Acumulado', field: 'prazoTotalAcumulado' },
    { header: 'Var. Prazo (%)', field: 'varPrazo' },
];

export { CommercialTableRows, CommercialTableCols, racionalTableCols};
