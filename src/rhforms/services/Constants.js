const handleLogin = (setUser) => {
    const token = localStorage.getItem('token');
    setUser({ token });
};
  
const handleLogout = (setUser) => {
    setUser(null);
};

const handleInputChange = (formData, setFormData, name, value) => {
    const newFormData = { ...formData, [name]: value };
    // const newFormData = { ...formData };
    // newFormData[name] = value;
    if (name === 'baseline' || name === 'preco_historico') {
        const baseline = parseFloat(newFormData.baseline);
        const precoHistorico = parseFloat(newFormData.preco_historico);

        if (!isNaN(baseline) && !isNaN(precoHistorico) && baseline !== 0) {
            // Calcula e define o valor de `inflacao` com duas casas decimais
            newFormData.inflacao = ((baseline - precoHistorico) / baseline * 100).toFixed(2);
        } else {
            // Limpa o valor de `inflacao` caso os dados sejam insuficientes
            newFormData.inflacao = '';
        }
    }
    setFormData(newFormData);
};

const formatCurrency = (value) => {
  if (!value) return '';
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parseFloat(value.replace(/[^\d.-]/g, '')));
};

export { handleLogin, handleLogout, handleInputChange, formatCurrency};
