/**
 * @param {string} stringToFormat the string to format, 'xxxXX' || 'xxxxxx'
 * @returns {string}            the formatted string => 'Xxxxxxx'
*/
export const firstLetterToUppercase = (stringToFormat: string): string => {
  const str = stringToFormat.trim();  
  return str.charAt(0).toUpperCase() +  str.slice(1);
}

/**
 * @param {string} stringToTest the string to test with the provided regex
 * @returns {RegExp} regex the regex to test with the provided string
*/
export const isValidFormat = (stringToTest: string, regex: RegExp): boolean => {
  const pattern = new RegExp(regex);
  return pattern.test(stringToTest);
}