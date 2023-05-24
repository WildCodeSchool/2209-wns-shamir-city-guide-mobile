/**
 * @param {string} stringToFormat the string to format, 'xxxXX' || 'xxxxxx'
 * @returns {string}            the formatted string => 'Xxxxxxx'
*/
export const firstLetterToUppercase = (stringToFormat: string): string => {
  const str = stringToFormat.trim();  
  return str.charAt(0).toUpperCase() +  str.slice(1);
}