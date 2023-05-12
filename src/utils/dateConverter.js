export const dateConverter = date => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const arrDate = date.split('/');
  const convertedDate = arrDate[0] + ' ' + months[Number(arrDate[1]) - 1] + ' ' + arrDate[2];

  return convertedDate;
};
