const formatCurrency = (number) => {
  number = number / 100;
  const options = { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 }
  const formatNumber = new Intl.NumberFormat('pt-BR', options)
  return (formatNumber.format(number)).split('R$ ')[1];
};

const parseCurrencyToInt = (number) => {
  number = number.match(/\d+/g).join('');
  return number
};


export { formatCurrency, parseCurrencyToInt };
