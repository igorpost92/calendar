export const addMonths = (date, quantity) => { //eslint-disable-line
  const month = date.getMonth();
  const year = date.getFullYear();

  const newDate = new Date(year, month + quantity);
  return newDate;
};

export const monthStart = (date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  return new Date(year, month, 1);
};

export const monthEnd = (date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  return new Date(year, month + 1, 0, 23, 59, 59);
};
