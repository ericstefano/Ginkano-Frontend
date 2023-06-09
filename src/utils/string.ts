export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase().concat(string.substring(1));
};

export const capitalizeAll = (string: string) => {
  return string.split(' ').map(capitalize).join(' ');
};
