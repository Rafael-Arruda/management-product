const formatDate = (dateString) => {
  let onlyDate = false;
  if (dateString.split(' ').length == 1){
    dateString = dateString + ' 00:00';
    onlyDate = true;
  }
  const date = new Date(dateString);
  const formattedDate = date.toLocaleString().replace(',','');

  return onlyDate ? formattedDate.split(' ')[0] : formattedDate;
};


export { formatDate };
